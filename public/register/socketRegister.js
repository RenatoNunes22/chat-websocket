const socket = io();

export function emitRegisterUser(data) {
  socket.emit("register-user", data);
}

socket.on("register_sucess", () => {
  alert("Cadastro realizado com sucesso!");
});

socket.on("register_error", () => {
  alert("Erro ao cadastrar usuario!");
});
