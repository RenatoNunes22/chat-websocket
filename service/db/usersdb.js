import { userCollection } from "./dbConnect.js";
import { hashPassword } from "../utils/hashpass.js";

export function seachUser(user) {
  return userCollection.findOne({ user });
}

export function registerUser({ user, pass }) {
  const { hashPass, password } = hashPassword(pass);
  return userCollection.insertOne({ name: user, password: hashPass, password });
}
