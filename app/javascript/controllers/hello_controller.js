import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    add(event) {
      var formfield = document.getElementById('formfield');
      var newField = document.createElement('input');
      newField.setAttribute('type','text');
      newField.setAttribute('name','items[]');
      newField.setAttribute('class','bg-transparent border-b-2 outline-0 text text-center');
      newField.setAttribute('placeholder','Add your items here');
      newField.setAttribute('autocomplete', 'off')
      newField.setAttribute('required','true');
      formfield.appendChild(newField);
    }

    remove(event) {
      console.log("clickaram");
      var input_tags = formfield.getElementsByTagName('input');
        formfield.removeChild(input_tags[(input_tags.length) - 1]);
    }
  }
