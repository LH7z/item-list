import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="flash-timeout"
export default class extends Controller {
  connect() {
    const flash = document.querySelector("#flash_notice")
    const error = document.querySelector("#flash_error")
    const alert = document.querySelector("#flash_alert")
    const explanation = document.querySelector("#error_explanation")
    if (flash) {
      setTimeout(() => {
        flash.remove()
      }, 7000);
    } if (error) {
      setTimeout(() => {
        error.remove()
      }, 7000);
    } if (alert) {
      setTimeout(() => {
        alert.remove()
      }, 7000);
    } if (explanation) {
      setTimeout(() => {
        explanation.remove()
      }, 7000);
    }
  }
}
