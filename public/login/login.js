import { emitAuthUser } from "./socketLogin.js";

const form = document.getElementById("form-login");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = form["input-usuario"].value;
  const pass = form["input-senha"].value;

  emitAuthUser({ user, pass });
});
