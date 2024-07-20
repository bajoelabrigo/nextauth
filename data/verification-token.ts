import { db } from "@/lib/db";


export const getVerificationTokenByEmail = async (
    email: string
) => {
  try {
    const verificationToken = await db.verificationToken.finFirst({
        where: {email}
    })
    return verificationToken;
  }catch{
    return null;
  }
}