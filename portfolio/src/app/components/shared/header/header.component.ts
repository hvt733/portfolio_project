import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

window.onload=function(){
  const open_nav_left = document.getElementById("nav_left")
  open_nav_left?.addEventListener('click',function(){
    open_nav_left?.classList.add("open_nav");
  })
}
