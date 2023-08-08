"use client";

import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/db";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/ProfileForm";

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-50 overflow-hidden p-4 rounded-lg border border-gray-200 bg-red-500">
                    <div className="flex justify-center items-center">
                        <img src="/images/crab.png" height={128} width={128} />
                    </div>
                </div>
            </div>
            <h1 className="flex justify-center text-4xl mt-4 font-bold">
                Welcome to CrabFit!
            </h1>
            <p className="flex justify-center text-4xm mt-4">
                Your personalized AI trainer, tailored to your needs!
            </p>
            {/* <p className="flex justify-center text-4xm">Yall sell crab legs?</p> */}
            <div className="flex justify-center items-center mt-8">
                <Button
                    asChild
                    className="px-4 py-3 text-lg bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    <Link href="/trainer">Get Started</Link>
                </Button>
            </div>
        </>
    );
}
