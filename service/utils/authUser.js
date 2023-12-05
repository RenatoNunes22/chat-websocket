import { scryptSync, timingSafeEqual } from "crypto";

export function authUser(pass, user) {
  const hashTest = scryptSync(pass, user.salPassword, 64);
  const hashReal = Buffer.from(user.password, "hex");
  const auth = timingSafeEqual(hashTest, hashReal);

  return auth;
}
