import Link from "next/link";
import { Icons } from "./ui/icons";
import { buttonVariants } from "./ui/button";
import { OptionsNav } from "./OptionsNav";

const Navbar = async () => {
    return (
        <div className="fixed top-0 inset-x-0 h-fit bg-red-500 border-b border-zinc-300 z-[10] py-2">
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                {/* logo */}
                <Link href="/" className="flex gap-2 items-center">
                    <img
                        src="/images/crab.png"
                        alt="crab"
                        width={32}
                        height={32}
                    />
                    <p className="hidden text-black-700 text-md font-medium md:block">
                        CrabFit
                    </p>
                </Link>

                <OptionsNav />
            </div>
        </div>
    );
};

export default Navbar;
