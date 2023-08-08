import Link from "next/link";
import { useRouter } from "next/navigation";

const TrainerNav = async () => {
    // const router = useRouter();

    // const handleFitnessPlanClick = () => {
    //     router.push("/trainer/plan");
    // };

    // const handleDietPlanClick = () => {
    //     router.push("/trainer/diet");
    // };

    return (
        <div className="fixed top-11 inset-x-0 h-fit bg-slate-50 border-b border-zinc-300 z-[10] py-2">
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                <div className="flex items-center">
                    {/* <p
                        className="cursor-pointer text-blue-500 hover:underline"
                        onClick={handleFitnessPlanClick}
                    >
                        Fitness Plan
                    </p> */}
                    <Link href="/trainer/plan">Fitness Plan</Link>
                    {/* Add more links on the left side if needed */}
                </div>
                <div className="flex items-center">
                    {/* Add more links on the right side if needed */}
                    {/* <p onClick={handleDietPlanClick}>Diet Plan</p> */}
                    <Link href="/trainer/diet">Diet Plan</Link>
                </div>
            </div>
        </div>
    );
};

export default TrainerNav;
