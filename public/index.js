import "./socket.js";

const listDocuments = document.getElementById("lista-documentos");

export function insertLinkDocument(documentName) {
  listDocuments.innerHTML += `<a
  href="documento.html?nome=${documentName}"
  class="list-group-item list-group-item-action"
>
${documentName}
</a>`;
}
