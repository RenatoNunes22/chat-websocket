import { randomBytes, scryptSync } from "crypto";

export function hashPassword(pass) {
  const password = randomBytes(16).toString("hex");
  const hashPass = scryptSync(pass, password, 64).toString("hex");

  return { hashPass, password };
}
