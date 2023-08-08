import { z } from "zod";

export const TrainerValidator = z.object({
    sex: z.string(),
    weight: z.string(),
    feet: z.string(),
    inches: z.string(),
    age: z.string(),
    goal: z.string(),
});

export type CreateTrainerPayload = z.infer<typeof TrainerValidator>;
