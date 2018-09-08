const todos = [{
    todo: 'Bath',
    completed: true
}, {
    todo: 'Wash',
    completed: true
}, {
    todo: 'Eat',
    completed: true
}, {
    todo: 'Drink',
    completed: false
}, {
    todo: 'Sleep',
    completed: false
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.todo.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed) {
            return -1
        } else if (!b.completed) {
            return 1
        }
    })
}

sortTodos(todos)
console.log(todos)

// deleteTodo(todos, 'Wash')
// console.log(todos)