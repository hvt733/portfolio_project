import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

window.onload=function(){
  const btn=document.getElementById('test')
  btn?.addEventListener('click',function(){
    console.log("Hello Na")
  })
}
