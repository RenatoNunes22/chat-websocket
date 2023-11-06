import { emitTextEdit } from "./socketFrontDocument.js";
import { selectRoom } from "./socketFrontDocument.js";
import { emitExcludeDocument } from "./socketFrontDocument.js";

const params = new URLSearchParams(window.location.search);
const roomSocket = params.get("nome");
const textEdit = document.getElementById("editor-texto");
const titleDocument = document.getElementById("titulo-documento");
const buttonExclude = document.getElementById("excluir-documento");

titleDocument.textContent = roomSocket || "Document without title";

selectRoom(roomSocket);

textEdit.addEventListener("keyup", () => {
  emitTextEdit(textEdit.value, roomSocket);
});

export function putchTextEdite(msg) {
  textEdit.value = msg;
}

buttonExclude.addEventListener("click", () => {
  emitExcludeDocument(roomSocket);
});

export function alertAndRedirect(room) {
  if (room === roomSocket) {
    alert(`Documento ${room} foi excluido com sucesso`);
    window.location.href = "/";
  }
}
