import { z } from "zod";
import { TypeIpDataSchema } from "../schema/fetchIpDataSchema";

export type TypeIpResultData = z.infer<typeof TypeIpDataSchema>