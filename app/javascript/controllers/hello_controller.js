import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {

    }
    add(event) {
      var formfield = document.getElementById('formfield');
      formfield.insertAdjacentHTML("beforeend", '<div class="input-button">');
      var position = formfield.lastElementChild
      position.insertAdjacentHTML("afterbegin", '<input autocomplete="off" name="items[]" class="bg-transparent border-b-2 outline-0 text text-center" required="required" placeholder="Add your items here" type="text" value id="list_items">')
      position.insertAdjacentHTML("beforeend", '<button type="button" class="trash-index" id="trash-item" data-action="click->hello#remove"><i class="fa-solid fa-trash-can"></i></button>')
    }

    remove(event) {
      console.log(event.currentTarget.parentNode);
      var input_tags = formfield.getElementsByTagName('input');
      if (input_tags.length > 1 ) {
        event.currentTarget.parentNode.remove()
      }
    }

    showButton() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    hideButton(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }
