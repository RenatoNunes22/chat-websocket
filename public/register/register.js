import { emitRegisterUser } from "./socketRegister.js";

const form = document.getElementById("form-cadastro");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = form["input-usuario"].value;
  const pass = form["input-senha"].value;

  emitRegisterUser({ user, pass });
});
