import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (
  token: string
) => {
try {
  const verificationToken = await db.verificationToken.finUnique({
      where: {token}
  })
  return verificationToken;
}catch{
  return null;
}
}


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