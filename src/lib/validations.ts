// Include Zod validation schemas in this file
import { z } from "zod";

// Sample Schema
export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().int().positive().max(120),
});
