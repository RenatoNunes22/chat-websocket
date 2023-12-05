import { setCookie } from "../utils/cookies.js";

const socket = io();

export function emitAuthUser(data) {
  socket.emit("auth-user", data);
}
socket.on("auth-sucess", (token) => {
  setCookie("token", token);
  alert("Login realizado com sucesso");
  window.location.href = "/";
});

socket.on("auth-fail", () => {
  alert("Usuario ou senha invalida");
});
