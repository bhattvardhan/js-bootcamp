const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

const generateNoteDOM = (note) => {
    const noteElement = document.createElement('div')
    const noteTextElement = document.createElement('a')
    const deleteNoteButton = document.createElement('button')

    deleteNoteButton.textContent = 'x'
    noteElement.appendChild(deleteNoteButton)
    deleteNoteButton.addEventListener('click', () => {
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

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`