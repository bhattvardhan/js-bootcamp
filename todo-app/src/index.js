import { createTodo, loadTodos } from "./todos";
import { setFilters } from "./filters";
import { renderTodos } from "./views";

renderTodos();

document.querySelector("#search-text").addEventListener("input", e => {
  setFilters({ searchText: e.target.value });
  renderTodos();
});

document.querySelector("#todo-form").addEventListener("submit", e => {
  e.preventDefault();
  const newTodo = e.target.elements.newTodo.value.trim();
  if (newTodo.length > 0) {
    createTodo(newTodo);
    renderTodos();
    e.target.elements.newTodo.value = "";
  }
});

document.querySelector("#completed-todo").addEventListener("change", e => {
  setFilters({ hideCompleted: e.target.checked });
  renderTodos();
});

window.addEventListener("storage", e => {
  if (e.key === "todos") {
    loadTodos();
    renderTodos();
  }
});
