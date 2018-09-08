const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const newTodo = e.target.elements.newTodo.value
    addTodo(todos, newTodo)
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

document.querySelector('#completed-todo').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})