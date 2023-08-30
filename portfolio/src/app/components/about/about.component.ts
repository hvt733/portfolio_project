import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}

window.onload = function() {
  console.log("Hello Na")
  const anima1 = document.getElementById("anima1")
  const anima2 = document.getElementById("anima2")
  const anima3 = document.getElementById("anima3")
  
  function handleScroll() {
    if (document.documentElement.scrollTop >= 100) {
      anima1?.classList.add("anima1_run")
      anima2?.classList.add("anima2_run")
      anima3?.classList.add("anima3_run")
    } 
    else {
      anima1?.classList.remove("anima1_run")
      anima2?.classList.remove("anima2_run")
      anima3?.classList.remove("anima3_run")
    }
  }

  window.addEventListener("scroll", handleScroll)
}

