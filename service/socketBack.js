import "dotenv/config";
import io from "./service.js";
import { recordEventsDocument } from "./socket/recordEventsDocument.js";
import { recordInitialEvent } from "./socket/recordInitialEvents.js";
import { recordEventRegister } from "./socket/recordEventRegister.js";
import { recordEventLogin } from "./socket/recordEventLogin.js";

io.on("connection", (socket) => {
  console.log(`Socket conneted`);
  socket.on("disconnect", () => {
    console.log("Usuário desconectado ");
  });
  recordEventLogin(socket, io);
  recordInitialEvent(socket, io);
  recordEventsDocument(socket, io);
  recordEventRegister(socket, io);
});
