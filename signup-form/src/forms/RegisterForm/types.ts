import { z } from "zod";
import { RegisterSchema } from "./RegisterSchema";

export type Inputs = z.infer<typeof RegisterSchema>;
