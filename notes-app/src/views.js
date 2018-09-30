import moment from "moment";
import { getFilters } from "./filters";
import { sortNotes, getNotes } from "./notes";

const generateNoteDOM = note => {
  const noteElement = document.createElement("a");
  const noteTextElement = document.createElement("p");
  const statusElement = document.createElement("p");

  if (note.title.length > 0) {
    noteTextElement.textContent = note.title;
  } else {
    noteTextElement.textContent = "Unnamed note";
  }
  noteTextElement.classList.add("list-item__title");
  noteElement.appendChild(noteTextElement);

  noteElement.setAttribute("href", `/edit.html#${note.id}`);
  noteElement.classList.add("list-item");

  statusElement.textContent = generateLastEdited(note.updatedAt);
  statusElement.classList.add("list-item__subtitle");
  noteElement.appendChild(statusElement);

  return noteElement;
};

const renderNotes = () => {
  const notesElement = document.querySelector("#notes");
  const filters = getFilters();

  const notes = sortNotes(filters.sortBy);
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesElement.innerHTML = "";

  if (filteredNotes.length > 0) {
    filteredNotes.forEach(note => {
      const noteElement = generateNoteDOM(note);
      notesElement.appendChild(noteElement);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No notes to show";
    emptyMessage.classList.add("empty-message");
    notesElement.appendChild(emptyMessage);
  }
};

const initializeEditPage = (noteID) => {
  const noteTitleElement = document.querySelector("#note-title");
  const noteBodyElement = document.querySelector("#note-body");
  const lastUpdatedElement = document.querySelector("#last-edited");

  const notes = getNotes();
  const note = notes.find(note => note.id === noteID);

  if (!note) {
    location.assign("/index.html");
  }

  lastUpdatedElement.textContent = generateLastEdited(note.updatedAt);
  noteTitleElement.value = note.title;
  noteBodyElement.value = note.body;
}

const generateLastEdited = timestamp =>
  `Last edited ${moment(timestamp).fromNow()}`;

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage };
