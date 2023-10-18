import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="completed"
export default class extends Controller {
  static target = ["button"];
  originalText = this.element.innerHTML

  handle(event) {
    if (this.element.classList.contains("completed") == false) {
      this.element.classList.add("completed")
      this.element.innerHTML = "completed 👍";
    } else {
      this.element.classList.remove("completed")
      this.element.innerHTML = this.originalText
    }
  }
}
