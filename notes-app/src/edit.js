import { initializeEditPage, generateLastEdited } from "./views";
import { updateNote, removeNote } from "./notes";

const noteTitleElement = document.querySelector("#note-title");
const noteBodyElement = document.querySelector("#note-body");
const lastUpdatedElement = document.querySelector("#last-edited");
const removeNoteElement = document.querySelector("#remove-note");
const noteID = location.hash.substring(1);

initializeEditPage(noteID);

noteTitleElement.addEventListener("input", e => {
  const note = updateNote(noteID, { title: e.target.value });
  lastUpdatedElement.textContent = generateLastEdited(note.updatedAt);
});

noteBodyElement.addEventListener("input", e => {
  const note = updateNote(noteID, { body: e.target.value });
  lastUpdatedElement.textContent = generateLastEdited(note.updatedAt);
});

removeNoteElement.addEventListener("click", () => {
  removeNote(noteID);
  location.assign("/index.html");
});

window.addEventListener("storage", e => {
  if (e.key === "notes") {
    initializeEditPage(noteID);
  }
});
