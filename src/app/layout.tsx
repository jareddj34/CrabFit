import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Providers from "@/components/ui/Providers";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "CrabFit",
    description: "A personalized AI Trainer",
};

export default function RootLayout({
    children,
    authModal,
}: {
    children: React.ReactNode;
    authModal: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cn(
                "bg-white text-slate-900 antialiased light",
                inter.className
            )}
        >
            <body className="min-h-screen pt-12 bg-slate-50 antialiased">
                <Providers>
                    <Navbar />
                    <div className="container max-w-7xl mx-auto h-full pt-10 pb-4">
                        {children}
                    </div>
                </Providers>

                <Toaster />
            </body>
        </html>
    );
}
