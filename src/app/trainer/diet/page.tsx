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

const page = async ({}) => {
    const content = await prisma.plans.findFirst({
        orderBy: { id: "desc" },
    });

    const response = content?.dietPlan;

    return (
        <>
            <TrainerNav />
            <h1 className="flex text-4xl mt-4 font-bold gap-y-3">
                Your Diet Plan:
            </h1>
            <hr className="bg-zinc-500 h-px my-6" />
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

            <hr className="bg-zinc-500 h-px my-6" />

            <Button asChild className="py-3">
                <a href="/trainer">Go Back</a>
            </Button>
        </>
    );
};

export default page;
