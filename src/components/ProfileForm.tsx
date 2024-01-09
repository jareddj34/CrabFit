import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { CreateTrainerPayload } from "@/lib/validators/trainer";
import { useRouter } from "next/navigation";
import { prisma } from "@/db";
import { useToast } from "@/components/ui/use-toast";

export const profileFormSchema = z.object({
    sex: z.string({
        required_error: "Please select a sex to continue.",
    }),
    weight: z.string({
        required_error: "Please enter your weight",
    }),
    feet: z.string({
        required_error: "Please enter your height",
    }),
    inches: z.string(),
    age: z.string({
        required_error: "Please enter your age",
    }),
    goal: z.string({
        required_error: "Please enter your goals",
    }),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {};

export function ProfileForm() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    });

    const { toast } = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { mutate: createAttributes } = useMutation({
        mutationFn: async (info: ProfileFormValues) => {
            const payload: CreateTrainerPayload = {
                sex: info.sex,
                weight: info.weight,
                feet: info.feet,
                inches: info.inches,
                age: info.age,
                goal: info.goal,
            };

            const { data } = await axios.post("/api/trainer", payload);
            return data as string;
        },

        onError: (err) => {
            toast({
                title: "There was an error.",
                description: "BROOO WTF",
                variant: "destructive",
            });
        },

        onSuccess: () => {
            router.push(`/trainer/plan`);
        },
    });

    async function onSubmit(info: ProfileFormValues) {
        // toast({
        //     title: "You submitted the following values:",
        //     description: (
        //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //             <code className="text-white">
        //                 {JSON.stringify(info, null, 2)}
        //             </code>
        //         </pre>
        //     ),
        // });
        toast({
            title: "Creating your fitness plan!",
            description: "This could take a few moments",
        });
        setLoading(true);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Weight</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="lbs"
                                    style={{
                                        width: "250px",
                                        marginBottom: "20px",
                                    }}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div style={{ display: "flex", alignItems: "center" }}>
                    <FormField
                        control={form.control}
                        name="feet"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Height</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="ft"
                                        style={{
                                            width: "120px",
                                            marginRight: "10px",
                                            marginBottom: "4px",
                                        }}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="inches"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="in"
                                        style={{
                                            width: "120px",
                                            marginTop: "30px",
                                            marginBottom: "4px",
                                        }}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="years"
                                    style={{
                                        width: "250px",
                                        marginBottom: "20px",
                                    }}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="sex"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sex</FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger
                                        style={{
                                            width: "250px",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        <SelectValue placeholder="Select your sex" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="male">
                                            Male
                                        </SelectItem>
                                        <SelectItem value="female">
                                            Female
                                        </SelectItem>
                                        <SelectItem value="prefer not to say">
                                            Prefer not to say
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="goal"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Goals</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="I want to..."
                                    id="goals"
                                    style={{
                                        backgroundColor: "white",
                                    }}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div style={{ marginTop: "20px" }}>
                    <Button
                        type="submit"
                        onClick={() => createAttributes(form.getValues())}
                        disabled={loading || !form.formState.isValid}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Loading...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
