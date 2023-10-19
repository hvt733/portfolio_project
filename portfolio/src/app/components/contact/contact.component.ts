import { Component } from '@angular/core';
import { timer } from 'rxjs';

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

  let box_name=document.getElementById("full-name")
  let box_email=document.getElementById("email")
  let box_subject1=document.getElementById("subject1")
  let box_subject2=document.getElementById("subject2")
  const form=document.getElementById("form")
  box_name?.addEventListener('focus',function(){
    form?.classList.add('form_message_no')
  })
  box_email?.addEventListener('focus',function(){
    form?.classList.add('form_message_no')
  })
  box_subject1?.addEventListener('focus',function(){
    form?.classList.add('form_message_no')
  })
  box_subject2?.addEventListener('focus',function(){
    form?.classList.add('form_message_no')
  })

  box_name?.addEventListener('blur',function(){
    form?.classList.remove('form_message_no')
  })
  box_email?.addEventListener('blur',function(){
    form?.classList.remove('form_message_no')
  })
  box_subject1?.addEventListener('blur',function(){
    form?.classList.remove('form_message_no')
  })
  box_subject2?.addEventListener('blur',function(){
    form?.classList.remove('form_message_no')
  })

  const btn_mb=document?.getElementById("btn_mb")
  const item_mb=document.getElementById("small_box_mb")
  btn_mb?.addEventListener('click',function(){
    if(item?.className.includes("item-box")){
      item_mb?.classList.remove("item-box")
      item_mb?.classList.add("small_box")
    }
    else{
      item_mb?.classList.remove("small_box")
      item_mb?.classList.add("item-box")
    }
  })

  let box_name_mb=document.getElementById("full-name_mb")
  let box_email_mb=document.getElementById("email_mb")
  let box_subject1_mb=document.getElementById("subject1_mb")
  let box_subject2_mb=document.getElementById("subject2_mb")
  const form_mb=document.getElementById("form_mb")
  box_name_mb?.addEventListener('focus',function(){
    form_mb?.classList.add('form_message_no')
  })
  box_email_mb?.addEventListener('focus',function(){
    form_mb?.classList.add('form_message_no')
  })
  box_subject1_mb?.addEventListener('focus',function(){
    form_mb?.classList.add('form_message_no')
  })
  box_subject2_mb?.addEventListener('focus',function(){
    form_mb?.classList.add('form_message_no')
  })

  box_name_mb?.addEventListener('blur',function(){
    form_mb?.classList.remove('form_message_no')
  })
  box_email_mb?.addEventListener('blur',function(){
    form_mb?.classList.remove('form_message_no')
  })
  box_subject1_mb?.addEventListener('blur',function(){
    form_mb?.classList.remove('form_message_no')
  })
  box_subject2_mb?.addEventListener('blur',function(){
    form_mb?.classList.remove('form_message_no')
  })
}

window.onscroll= function(){
  var content = document.getElementById("webbb" );
  if(document.documentElement.scrollTop >= 100){
    content?.classList.add("show")
  }

  var content = document.getElementById("webbb_MB" );
  if(document.documentElement.scrollTop >= 100){
    content?.classList.add("show")
  }

  // animation timeline PC
  var anima1=document.getElementById("anima1")
  var anima2=document.getElementById("anima2")
  var anima3=document.getElementById("anima3")
  var logo1=document.getElementById("logo1")
  var logo2=document.getElementById("logo2")
  var logo3=document.getElementById("logo3")
  var timeline=document.getElementById("timeline")
  if(document.documentElement.scrollTop >= 1300){
    anima1?.classList.add("anima1_run")
    anima2?.classList.add("anima2_run")
    anima3?.classList.add("anima3_run")
    logo1?.classList.add("logo1_ani")
    logo2?.classList.add("logo2_ani")
    logo3?.classList.add("logo3_ani")
    timeline?.classList.add("timeline_ani")
  }

  // animation timeline MB
  var anima1=document.getElementById("anima1_MB")
  var anima2=document.getElementById("anima2_MB")
  var anima3=document.getElementById("anima3_MB")
  var logo1=document.getElementById("logo1_MB")
  var logo2=document.getElementById("logo2_MB")
  var logo3=document.getElementById("logo3_MB")
  var timeline=document.getElementById("timeline_MB")
  if(document.documentElement.scrollTop >= 130){
    anima1?.classList.add("anima1_run_MB")
    anima2?.classList.add("anima2_run_MB")
    anima3?.classList.add("anima3_run_MB")
    logo1?.classList.add("logo1_ani_MB")
    logo2?.classList.add("logo2_ani_MB")
    logo3?.classList.add("logo3_ani_MB")
    timeline?.classList.add("timeline_ani_MB")
  }

  // animation timeline MBB (tablet maybe)
  // var anima1=document.getElementById("anima1_MBB")
  // var anima2=document.getElementById("anima2_MBB")
  // var anima3=document.getElementById("anima3_MBB")
  // var logo1=document.getElementById("logo1_MBB")
  // var logo2=document.getElementById("logo2_MBB")
  // var logo3=document.getElementById("logo3_MBB")
  // var timeline=document.getElementById("timeline_MBB")
  // if(document.documentElement.scrollTop >= 1300){
  //   anima1?.classList.add("anima1_run_MBB")
  //   anima2?.classList.add("anima2_run_MBB")
  //   anima3?.classList.add("anima3_run_MBB")
  //   logo1?.classList.add("logo1_ani_MBB")
  //   logo2?.classList.add("logo2_ani_MBB")
  //   logo3?.classList.add("logo3_ani_MBB")
  //   timeline?.classList.add("timeline_ani_MBB")
  // }

  // edu PC
  var edu_before=document.getElementById("edu")
  var nutdo1=document.getElementById("nutdo1")
  var anh1=document.getElementById("anh1")
  var nutdo2=document.getElementById("nutdo2")
  var anh2=document.getElementById("anh2")
  var nutdo3=document.getElementById("nutdo3")
  var anh3=document.getElementById("anh3")
  var nutdo4=document.getElementById("nutdo4")
  var anh4=document.getElementById("anh4")
  var small_content1=document.getElementById("small_content1")
  var small_content2=document.getElementById("small_content2")
  var small_content3=document.getElementById("small_content3")
  var small_content4=document.getElementById("small_content4")
  if(document.documentElement.scrollTop >= 2220){
    edu_before?.classList.add("edu_ani")
    nutdo1?.classList.add("nutdo1_ani")
    anh1?.classList.add('nutdo1_ani')
    nutdo2?.classList.add("nutdo2_ani")
    anh2?.classList.add('nutdo2_ani')
    nutdo3?.classList.add("nutdo3_ani")
    anh3?.classList.add('nutdo3_ani')
    nutdo4?.classList.add("nutdo4_ani")
    anh4?.classList.add('nutdo4_ani')
    small_content1?.classList.add("small1_ani")
    small_content2?.classList.add("small2_ani")
    small_content3?.classList.add("small3_ani")
    small_content4?.classList.add("small4_ani")
  }



  // edu MB
  var edu_before=document.getElementById("edu_MB")
  var nutdo1=document.getElementById("nutdo1_MB")
  var anh1=document.getElementById("anh1_MB")
  var nutdo2=document.getElementById("nutdo2_MB")
  var anh2=document.getElementById("anh2_MB")
  var nutdo3=document.getElementById("nutdo3_MB")
  var anh3=document.getElementById("anh3_MB")
  var nutdo4=document.getElementById("nutdo4_MB")
  var anh4=document.getElementById("anh4_MB")
  var small_content1=document.getElementById("small_content1_MB")
  var small_content2=document.getElementById("small_content2_MB")
  var small_content3=document.getElementById("small_content3_MB")
  var small_content4=document.getElementById("small_content4_MB")
  if(document.documentElement.scrollTop >= 2220){
    edu_before?.classList.add("edu_ani_MB")
    nutdo1?.classList.add("nutdo1_ani_MB")
    anh1?.classList.add("nutdo1_ani_MB")
    nutdo2?.classList.add("nutdo2_ani_MB")
    anh2?.classList.add("nutdo2_ani_MB")
    nutdo3?.classList.add("nutdo3_ani_MB")
    anh3?.classList.add("nutdo3_ani_MB")
    nutdo4?.classList.add("nutdo4_ani_MB")
    anh4?.classList.add("nutdo4_ani_MB")
    small_content1?.classList.add("small1_ani_MB")
    small_content2?.classList.add("small2_ani_MB")
    small_content3?.classList.add("small3_ani_MB")
    small_content4?.classList.add("small4_ani_MB")


  }
  // edu TABLET
  var edu_before=document.getElementById("edu_TABLET")
  var nutdo1=document.getElementById("nutdo1_TABLET")
  var anh1=document.getElementById("anh1_TABLET")
  var nutdo2=document.getElementById("nutdo2_TABLET")
  var anh2=document.getElementById("anh2_TABLET")
  var nutdo3=document.getElementById("nutdo3_TABLET")
  var anh3=document.getElementById("anh3_TABLET")
  var nutdo4=document.getElementById("nutdo4_TABLET")
  var anh4=document.getElementById("anh4_TABLET")
  var small_content1=document.getElementById("small_content1_TABLET")
  var small_content2=document.getElementById("small_content2_TABLET")
  var small_content3=document.getElementById("small_content3_TABLET")
  var small_content4=document.getElementById("small_content4_TABLET")
  if(document.documentElement.scrollTop >= 2220){
    edu_before?.classList.add("edu_ani_TABLET")
    nutdo1?.classList.add("nutdo1_ani_TABLET")
    anh1?.classList.add("nutdo1_ani_TABLET")
    nutdo2?.classList.add("nutdo2_ani_TABLET")
    anh2?.classList.add("nutdo2_ani_TABLET")
    nutdo3?.classList.add("nutdo3_ani_TABLET")
    anh3?.classList.add("nutdo3_ani_TABLET")
    nutdo4?.classList.add("nutdo4_ani_TABLET")
    anh4?.classList.add("nutdo4_ani_TABLET")
    small_content1?.classList.add("small1_ani_TABLET")
    small_content2?.classList.add("small2_ani_TABLET")
    small_content3?.classList.add("small3_ani_TABLET")
    small_content4?.classList.add("small4_ani_TABLET")


  }
}
