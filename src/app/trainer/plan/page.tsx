import { Button } from "@/components/ui/button";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Configuration, OpenAIApi } from "openai";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import TrainerNav from "@/components/TrainerNav";

const inter = Inter({ subsets: ["latin"] });

interface pageProps {}

const page = async ({}) => {
    const content = await prisma.plans.findFirst({
        orderBy: { id: "desc" },
    });

    const response = content?.fitnessPlan;

    return (
        <>
            {/* <TrainerNav /> */}
            <div className="flex space-x-8">
                <a
                    className="flex items-center font-medium text-lg"
                    href="/trainer/plan"
                >
                    Fitness Plan
                </a>
                <a
                    className="flex items-center font-medium text-lg text-muted-foreground hover:text-zinc-800"
                    href="/trainer/diet"
                >
                    Diet Plan
                </a>
            </div>
            <hr className="bg-black-500 h-px mb-6 mt-2" />
            <h1 className="flex text-4xl mt-4 font-bold gap-y-3">Your Plan:</h1>
            <hr className="bg-black-500 h-px my-6" />
            <pre
                style={{
                    fontSize: "16px",
                    backgroundColor: "rgba(112, 128, 144, 0)",
                    padding: "10px",
                    whiteSpace: "pre-wrap",
                }}
                className={cn(
                    "bg-white text-slate-900 antialiased light",
                    inter.className
                )}
            >
                {response}
            </pre>

            <hr className="bg-black-500 h-px my-6" />

            <Button asChild className="py-3">
                <a href="/trainer">Go Back</a>
            </Button>
        </>
    );
};

export default page;
