const noteTitleElement = document.querySelector('#note-title')
const noteBodyElement = document.querySelector('#note-body')
const removeNoteElement = document.querySelector('#remove-note')
const noteID = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteID
})

if (note === undefined) {
    location.assign('/index.html')
}

noteTitleElement.value = note.title
noteBodyElement.value = note.body

noteTitleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

noteBodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeNoteElement.addEventListener('click', function () {
    removeNote(noteID)
    saveNotes(notes)
    location.assign('/index.html')
})