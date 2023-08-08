import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export function OptionsNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Menu />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href="/">Home</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Link href="/aboutUs">About Us</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>Other Stuff</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
