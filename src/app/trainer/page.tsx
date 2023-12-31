"use client";

import { ProfileForm } from "@/components/ProfileForm";

export default function Home() {
    return (
        <>
            <h1 className="font-bold text-3xl md:text-4xl gap-y-4">
                Tell us about yourself
            </h1>
            <p className="my-4 text-zinc-500">
                Put in information about yourself so we can create a plan that
                is best suited to your needs!
            </p>
            <hr className="bg-zinc-500 h-px mb-6" />
            <ProfileForm />
        </>
    );
}
