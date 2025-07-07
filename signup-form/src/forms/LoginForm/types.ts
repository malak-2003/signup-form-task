import { z } from "zod";
import { LoginSchema } from "./LoginSchema";

export type Inputs = z.infer<typeof LoginSchema>;
