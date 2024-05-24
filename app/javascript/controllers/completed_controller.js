import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="completed"
export default class extends Controller {
  static targets = ["button"];
  originalText = this.buttonTarget.innerHTML

  connect() {
    // console.log(this.todoDateTarget.innerHTML);
    const list = localStorage.getItem(this.originalText)
    if (list) {
      this.buttonTarget.classList.add("completed")
      this.buttonTarget.innerHTML = "completed 👍"
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
}
