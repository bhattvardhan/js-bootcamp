'use strict'

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const generateSummaryDOM = (incompleteTodos) => {
    const summaryElement = document.createElement('h2')
    summaryElement.classList.add('list-title')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    
    summaryElement.textContent = `You have ${incompleteTodos.length} todo${plural} left`

    return summaryElement
}

const addTodo = (todoArray, value) => {
    todoArray.push({
        id: uuidv4(),
        title: value,
        status: false
    })
}

const renderTodos = (todos, filters) => {
    const todosElement = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.status

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = todos.filter((todo) => !todo.status)

    todosElement.innerHTML = ''
    todosElement.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todosElement.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageElement = document.createElement('p')
        messageElement.classList.add('empty-message')
        messageElement.textContent = 'No todos to show'
        todosElement.appendChild(messageElement)
    }
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.status = !todo.status
    }
}

const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('label')
    const containerElement = document.createElement('div')
    const selectTodoCheckbox = document.createElement('input')

    selectTodoCheckbox.setAttribute('type', 'checkbox')
    selectTodoCheckbox.checked = todo.status

    containerElement.appendChild(selectTodoCheckbox)
    selectTodoCheckbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    const todoTextElement = document.createElement('span')
    containerElement.appendChild(todoTextElement)
    todoTextElement.textContent = todo.title

    todoElement.classList.add('list-item')
    containerElement.classList.add('list-item__container')
    todoElement.appendChild(containerElement)

    const removeTodoButton = document.createElement('button')
    removeTodoButton.textContent = 'Remove'
    removeTodoButton.classList.add('button', 'button--text')
    todoElement.appendChild(removeTodoButton)
    removeTodoButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}