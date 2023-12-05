import jwt from "jsonwebtoken";

export function tokenJwt(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return token;
}
