import { emitTextEdit } from "./socketFrontDocument.js";
import { selectRoom } from "./socketFrontDocument.js";

const params = new URLSearchParams(window.location.search);
const roomSocket = params.get("nome");
const textEdit = document.getElementById("editor-texto");
const titleDocument = document.getElementById("titulo-documento");

titleDocument.textContent = roomSocket || "Document without title";

selectRoom(roomSocket);

textEdit.addEventListener("keyup", () => {
  emitTextEdit(textEdit.value, roomSocket);
});

export function putchTextEdite(msg) {
  textEdit.value = msg;
}
