"use client";

import { ProfileForm } from "@/components/ProfileForm";

export default function Home() {
    return (
        <>
            <h1 className="font-bold text-3xl md:text-4xl gap-y-4">
                Tell us about yourself
            </h1>
            <hr className="bg-zinc-500 h-px my-6" />
            <ProfileForm />
        </>
    );
}
