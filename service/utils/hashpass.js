import { randomBytes, scryptSync } from "crypto";

export function hashPassword(pass) {
  const salPass = randomBytes(16).toString("hex");
  const hashPass = scryptSync(pass, salPass, 64).toString("hex");

  return { hashPass, salPass };
}
