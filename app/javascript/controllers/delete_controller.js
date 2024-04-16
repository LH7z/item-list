import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="delete"
export default class extends Controller {
  static targets = ["item", "trash"]

  connect() {
  }

  delete(event){
    const button = this.itemTarget
    const trash = this.trashTarget
    button.setAttribute("class", "hidden")
    trash.setAttribute("class", "hidden")
  }
}
