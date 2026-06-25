
// import jwt from "jsonwebtoken";

// export const generateToken = (id: string, role: string) => {
//   return jwt.sign(
//     {
//       id,
    
//       iat: Date.now(),   
//       nonce: Math.random() 
//     },
//     process.env.JWT_SECRET as string,
//     { expiresIn: "7d" }
//   );
// };

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