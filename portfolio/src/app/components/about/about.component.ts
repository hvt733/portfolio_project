import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}

window.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("button_work");
  var content = document.getElementById("webbb");

  button?.addEventListener("click", function() {
    if (content) {
      content.classList.toggle("show");
    }
  });
});
