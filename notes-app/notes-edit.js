const noteTitleElement = document.querySelector('#note-title')
const noteBodyElement = document.querySelector('#note-body')
const lastUpdatedElement = document.querySelector('#last-edited')
const removeNoteElement = document.querySelector('#remove-note')
const noteID = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteID)

if (note === undefined) {
    location.assign('/index.html')
}

lastUpdatedElement.textContent = generateLastEdited(note.updatedAt)
noteTitleElement.value = note.title
noteBodyElement.value = note.body

noteTitleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastUpdatedElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

noteBodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastUpdatedElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeNoteElement.addEventListener('click', () => {
    removeNote(noteID)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteID)

        if (note === undefined) {
            location.assign('/index.html')
        }

        noteTitleElement.value = note.title
        noteBodyElement.value = note.body
        lastUpdatedElement.textContent = generateLastEdited(note.updatedAt)
    }
})