"use server"

import * as z from "zod"
import { LoginSchema } from "@/schemas"

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const valideteFields = LoginSchema.safeParse(values);

    if (!valideteFields.success) {
        return {error: "Invalid fields!"};
     }
    return {success: "Email Send!"};
}

