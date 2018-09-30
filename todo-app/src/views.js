import { getTodos, toggleTodo, removeTodo } from "./todos";
import { getFilters, setFilters } from "./filters";

const renderTodos = () => {
  const { searchText, hideCompleted } = getFilters();
  const todosElement = document.querySelector("#todos");
  const filteredTodos = getTodos().filter(todo => {
    const searchTextMatch = todo.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const hideCompletedMatch = !hideCompleted || !todo.status;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = getTodos().filter(todo => !todo.status);

  todosElement.innerHTML = "";
  todosElement.appendChild(generateSummaryDOM(incompleteTodos));

  if (filteredTodos.length > 0) {
    filteredTodos.forEach(todo => {
      todosElement.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageElement = document.createElement("p");
    messageElement.classList.add("empty-message");
    messageElement.textContent = "No todos to show";
    todosElement.appendChild(messageElement);
  }
};

const generateTodoDOM = todo => {
  const todoElement = document.createElement("label");
  const containerElement = document.createElement("div");
  const selectTodoCheckbox = document.createElement("input");

  selectTodoCheckbox.setAttribute("type", "checkbox");
  selectTodoCheckbox.checked = todo.status;

  containerElement.appendChild(selectTodoCheckbox);
  selectTodoCheckbox.addEventListener("change", () => {
    toggleTodo(todo.id);
    renderTodos();
  });

  const todoTextElement = document.createElement("span");
  containerElement.appendChild(todoTextElement);
  todoTextElement.textContent = todo.title;

  todoElement.classList.add("list-item");
  containerElement.classList.add("list-item__container");
  todoElement.appendChild(containerElement);

  const removeTodoButton = document.createElement("button");
  removeTodoButton.textContent = "Remove";
  removeTodoButton.classList.add("button", "button--text");
  todoElement.appendChild(removeTodoButton);
  removeTodoButton.addEventListener("click", () => {
    removeTodo(todo.id);
    renderTodos();
  });

  return todoElement;
};

const generateSummaryDOM = incompleteTodos => {
  const summaryElement = document.createElement("h2");
  summaryElement.classList.add("list-title");
  const plural = incompleteTodos.length === 1 ? "" : "s";

  summaryElement.textContent = `You have ${
    incompleteTodos.length
  } todo${plural} left`;

  return summaryElement;
};

export { renderTodos, generateSummaryDOM, generateTodoDOM };
