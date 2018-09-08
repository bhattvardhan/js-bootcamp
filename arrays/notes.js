const notes = [{
    title: 'Story printing app',
    body: 'An app to print user stories'
}, {
    title: 'Iteration planning app',
    body: 'An app to plan the release of a product'
}, {
    title: 'Ride sharing app',
    body: 'An app which helps you to share your location while you pool a cab'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query)
        const isBodyMatch = note.body.toLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
}