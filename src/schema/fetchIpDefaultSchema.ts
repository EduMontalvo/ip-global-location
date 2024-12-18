import { z } from "zod";

export const TypeIpDefaultSchema = z.object({
    ip: z.string()
})