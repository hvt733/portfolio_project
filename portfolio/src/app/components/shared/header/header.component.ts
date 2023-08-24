import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

window.onload=function(){
  const btn=document.getElementById('light_dark')
  const main_tag=document.getElementsByTagName('body')
  console.log(main_tag)
}