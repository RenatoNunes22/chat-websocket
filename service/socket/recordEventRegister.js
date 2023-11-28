import { registerUser, seachUser } from "../db/usersdb.js";
export function recordEventRegister(socket, io) {
  socket.on("register-user", async (data) => {
    const result = await registerUser(data);
    const user = await seachUser(data.name);

    if (user === null) {
      if (result.acknowledged) {
        socket.emit("register_sucess");
      } else {
        socket.emit("register_error");
      }
    } else {
      console.log("User already exists in the database");
    }
  });
}
