
import jwt from "jsonwebtoken";

export const generateToken = (id: string) => {
  return jwt.sign(
    {
      id,
      nonce: Math.random()
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
};