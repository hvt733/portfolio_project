import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}

window.onload=function(){
  const item=document.getElementById("small_box")
  let btn_form = document.getElementById("btn") 
  btn_form?.addEventListener('click',function(){
    if(item?.className.includes("item-box")){
      item?.classList.remove("item-box")
      item?.classList.add("small_box")
    }
    else{
      item?.classList.remove("small_box")
      item?.classList.add("item-box")
    }
  })
  
  const item1=document.getElementById("small_box1")
  let btn_form1 = document.getElementById("btn1") 
  btn_form1?.addEventListener('click',function(){
    if(item1?.className.includes("item-box")){
      item1?.classList.remove("item-box")
      item1?.classList.add("small_box")
    }
    else{
      item1?.classList.remove("small_box")
      item1?.classList.add("item-box")
    }
  })

  const item2=document.getElementById("small_box2")
  let btn_form2 = document.getElementById("btn2") 
  btn_form2?.addEventListener('click',function(){
    if(item2?.className.includes("item-box")){
      item2?.classList.remove("item-box")
      item2?.classList.add("small_box")
    }
    else{
      item2?.classList.remove("small_box")
      item2?.classList.add("item-box")
    }
  })

  const item3=document.getElementById("small_box3")
  let btn_form3 = document.getElementById("btn3") 
  btn_form3?.addEventListener('click',function(){
    if(item3?.className.includes("item-box")){
      item3?.classList.remove("item-box")
      item3?.classList.add("small_box")
    }
    else{
      item3?.classList.remove("small_box")
      item3?.classList.add("item-box")
    }
  })

  const item4=document.getElementById("small_box4")
  let btn_form4 = document.getElementById("btn4") 
  btn_form4?.addEventListener('click',function(){
    if(item4?.className.includes("item-box")){
      item4?.classList.remove("item-box")
      item4?.classList.add("small_box")
    }
    else{
      item4?.classList.remove("small_box")
      item4?.classList.add("item-box")
    }
  })
}