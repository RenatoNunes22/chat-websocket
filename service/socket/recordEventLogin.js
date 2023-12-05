import { seachUser } from "../db/usersdb.js";
import { authUser } from "../utils/authUser.js";
import { tokenJwt } from "../utils/tokenJwt.js";

export function recordEventLogin(socket, io) {
  socket.on("auth-user", async (data) => {
    const user = await seachUser(data.name);
    const auth = authUser(data.pass, user);

    if (user) {
      if (auth) {
        const token = tokenJwt({ nameUser: user.name });
        socket.emit("auth-sucess", token);
      } else {
        socket.emit("auth-fail");
      }
    } else {
      socket.emit("auth-fail");
    }
  });
}
