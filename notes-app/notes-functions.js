const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

const generateNoteDOM = function (note) {
    const noteElement = document.createElement('div')
    const noteTextElement = document.createElement('a')
    const deleteNoteButton = document.createElement('button')

    deleteNoteButton.textContent = 'x'
    noteElement.appendChild(deleteNoteButton)
    deleteNoteButton.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    if (note.title.length > 0) {
        noteTextElement.textContent = note.title
    } else {
        noteTextElement.textContent = 'Unnamed note'
    }

    noteTextElement.setAttribute('href', `/edit.html#${note.id}`)
    noteElement.appendChild(noteTextElement)

    return noteElement
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}