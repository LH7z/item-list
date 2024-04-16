import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="completed"
export default class extends Controller {
  static targets = ["button", "todo", "text", "buttonText", "todoDate"];
  originalText = this.buttonTarget.innerHTML
  // dataTodo = this.buttonTarget.getAttribute('data-Todo')

  connect() {
    console.log(this.todoDateTarget.innerHTML);
    const list = localStorage.getItem(this.originalText)
    const todo = localStorage.getItem(this.todoDateTarget.innerHTML)
    if (list) {
      this.buttonTarget.classList.add("completed")
      this.buttonTarget.innerHTML = "completed 👍"
    }
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

  handle(event) {
    event.target.classList.toggle("completed")
    if (this.buttonTarget.innerHTML == "completed 👍") {
      this.buttonTarget.innerHTML = this.originalText
      localStorage.removeItem(this.originalText)
    } else {
      setTimeout(() => {
        this.buttonTarget.innerHTML = "completed 👍";
        localStorage.setItem(this.originalText , "completed")
      }, 1000);
    }
  }

  to_do_completed(event) {
    localStorage.removeItem(this.todoDateTarget.innerHTML)
    if (this.todoTarget.classList == "" || this.todoTarget.classList == "remove") {
      this.todoTarget.classList.remove("remove")
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
      this.todoTarget.classList.add("remove")
      setTimeout(() => {
        this.buttonTextTarget.style = "none"
        this.textTarget.innerHTML = "complete"
      }, 1000);
    }

  }
}
