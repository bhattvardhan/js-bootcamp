const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const generateSummaryDOM = function (incompleteTodos) {
    const newParagraph = document.createElement('h2')
    newParagraph.textContent = `You have ${incompleteTodos.length} todos left`
    return newParagraph
}

const addTodo = function (todoArray, value) {
    todoArray.push({
        id: uuidv4(),
        title: value,
        status: false
    })
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.status
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = todos.filter(function (todo) {
        return !todo.status
    })

    document.querySelector('#todo').innerHTML = ''
    document.querySelector('#todo').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todo').appendChild(generateTodoDOM(todo))
    })
}

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    if (todo !== undefined) {
        todo.status = !todo.status
    }
}

const generateTodoDOM = function (todo) {
    const todoElement = document.createElement('div')
    
    const selectTodoCheckbox = document.createElement('input')
    selectTodoCheckbox.setAttribute('type', 'checkbox')
    selectTodoCheckbox.checked = todo.status
    todoElement.appendChild(selectTodoCheckbox)
    selectTodoCheckbox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    const todoTextElement = document.createElement('span')
    todoElement.appendChild(todoTextElement)
    todoTextElement.textContent = todo.title

    const removeTodoButton = document.createElement('button')
    removeTodoButton.textContent = 'x'
    todoElement.appendChild(removeTodoButton)
    removeTodoButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    return todoElement
}