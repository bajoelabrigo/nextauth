"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const valideteFields = RegisterSchema.safeParse(values);

  if (!valideteFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = valideteFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already exists!" };
  }
  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
  //TODO: Send verification token email

  return { success: "User created!" };
};
