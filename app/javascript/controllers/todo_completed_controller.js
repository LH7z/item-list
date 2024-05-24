import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="todo-completed"
export default class extends Controller {
  static targets = ["button", "todo", "text", "buttonText", "todoDate"];
  dataTodo = this.todoTarget.getAttribute("data-todo")

  connect() {
    const todo = localStorage.getItem(this.todoDateTarget.innerHTML)
    if (todo) {
      this.todoTarget.classList.add("completed")
      setTimeout(() => {
        this.textTarget.innerHTML = "Re open"
        this.buttonTextTarget.style.border = "2px solid white"
        this.buttonTextTarget.style.color = "white"
        this.buttonTextTarget.style.background = "#2bff2499"
      }, 1000);
    }
  }
  to_do_completed(event) {
    localStorage.removeItem(this.todoDateTarget.innerHTML)
    if (this.todoTarget.classList == "" || this.todoTarget.classList == "remover") {
      this.todoTarget.classList.remove("remover")
      this.todoTarget.classList.add("completed")
      localStorage.setItem(this.todoDateTarget.innerHTML, "completed")
      setTimeout(() => {
        this.textTarget.innerHTML = "Re open"
        this.buttonTextTarget.style.border = "2px solid white"
        this.buttonTextTarget.style.color = "white"
        this.buttonTextTarget.style.background = "#2bff2499"
      }, 1000);
    } else {
      this.todoTarget.classList.remove("completed")
      this.todoTarget.classList.add("remover")
      setTimeout(() => {
        this.buttonTextTarget.style = "none"
        this.textTarget.innerHTML = "complete"
      }, 1000);
    }
  }
}
