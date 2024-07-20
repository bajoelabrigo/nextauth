"use server"

import * as z from "zod"
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const valideteFields = RegisterSchema.safeParse(values);

    if (!valideteFields.success) {
        return {error: "Invalid fields!"};
     }
    return {success: "Email Send!"};
}

