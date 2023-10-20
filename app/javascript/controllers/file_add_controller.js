import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="file-add"
export default class extends Controller {

  file(event) {
    let file = document.getElementById("file")
    file.click();
  }
  button(event) {
    const button = document.getElementById("my-button")
    if (file.value != ""){
      button.style.backgroundColor = "#2bff2499"
      button.style.border = "0px"
      button.innerHTML = "oh nice photo! 😎"
    } else {
      button.style.backgroundColor = "#ff000099"
      button.style.border = "0px"
      button.innerHTML = "C'mon bro put a photo!"
    };
  }
}
