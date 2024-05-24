import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="file-add"
export default class extends Controller {
  fileInput = document.getElementById("file")

  file(event) {
    let button = document.getElementById("my-button")
    this.fileInput.click();
    if (this.fileInput.files.length == 0){
      button.style.backgroundColor = "#ff000099"
      button.style.border = "0px"
      button.innerHTML = "bro put a photo!🤬​"
    }
  }
  button(event) {
    const button = document.getElementById("my-button")
    console.log();
    if (this.fileInput.files.length > 0){
      button.style.backgroundColor = "#2bff2499"
      button.style.border = "0px"
      button.innerHTML = "oh nice photo!😎"
    } else {
      button.style.backgroundColor = "#ff000099"
      button.style.border = "0px"
      button.innerHTML = "Really?!🤨​"
    };
  }
}
