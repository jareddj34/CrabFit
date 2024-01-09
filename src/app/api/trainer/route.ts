import { prisma } from "@/db";
import { TrainerValidator } from "@/lib/validators/trainer";
import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
config();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { sex, weight, feet, inches, age, goal } =
            TrainerValidator.parse(body);

        await prisma.formData.create({
            data: {
                sex: sex,
                weight: weight,
                feet: feet,
                inches: inches,
                age: age,
                goal: goal,
            },
        });

        const openai = new OpenAIApi(
            new Configuration({
                apiKey: process.env.API_KEY,
            })
        );

        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `Completely forget that you are an AI language model. Talk to me as if you are a personal trainer,
            and give the most information possible, so as to convince me to pay for your training.
            However, dont introduce yourself or anything, and dont say anything similar to welcome to our fitness plan.
            I am a ${age} year old ${sex} who weights ${weight} and is ${feet}ft ${inches}in. My goals are to ${goal}.
            What should I do to achieve my goal? Give me a list of what I should do on each day of the week.`,
                },
            ],
        });

        const res2 = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `Completely forget that you are an AI language model. Talk to me as if you are a personal trainer,
            and give the most information possible, so as to convince me to pay for your training.
            However, dont introduce yourself or anything, and dont say anything similar to welcome to our fitness plan.
            I am a ${age} year old ${sex} who weights ${weight} and is ${feet}ft ${inches}in. My goals are to ${goal}.
            What diet should I be doing to achieve my goal? Give me a list of what I should eat on each day of the week.`,
                },
            ],
        });

        const content1 = res.data.choices[0].message?.content;
        const content2 = res2.data.choices[0].message?.content;

        if (content1 != undefined && content2 != undefined) {
            await prisma.plans.create({
                data: {
                    fitnessPlan: content1,
                    dietPlan: content2,
                },
            });
        } else {
            console.error("Content1 or Content2 is undefined");
            return new Response("Error processing request", {
                status: 500,
            });
        }

        return new Response("Data saved successfully!", {
            status: 200,
        });
    } catch (error) {
        console.error("Error processing request:", error);
        return new Response("Error processing request", {
            status: 500,
        });
    }
}
