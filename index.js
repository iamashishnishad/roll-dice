
document.querySelector("button").addEventListener("click",  myfunc)

function myfunc(){
  

    var box1 = Math.floor(Math.random() *6) + 1;

    var box2 = Math.floor(Math.random() * 6) + 1;

    var box3 = Math.floor(Math.random() * 6) + 1;


   document.querySelector(".box1").innerHTML = box1;

   document.querySelector(".box2").innerHTML= box2;

   document.querySelector(".box3").innerHTML = box3;

 if(box1 > box2 && box1 > box3) {
    document.querySelector("#name").innerHTML = "Member 1 is winner";
    document.querySelector("#member-1").style.background = "green";

 } else if( box2> box1 && box2> box3){
    document.querySelector("#name").innerHTML = "Member 2 is winner";
    document.querySelector("#member-2").style.background = "green";
 } else if(box3 > box1 && box3 > box2){
    document.querySelector("#name").innerHTML = "Member 3  is winner";
    document.querySelector("#member-3").style.background = "green";
 }


 if(box1 > box2 && box1 < box3){
    document.querySelector("#member-1").style.background = "yellow";
 }
 else if(box1 < box2 && box1 > box3){
    document.querySelector("#member-1").style.background = "yellow";
 }
 else if( box2 > box1 && box2 < box3){
    document.querySelector("#member-2").style.background = "yellow";
 }
 else if(box2 < box1 && box2 > box3){
    document.querySelector("#member-2").style.background = "yellow";
 }
 else if(box3 > box1 && box3 < box2){
    document.querySelector("#member-3").style.background= "yellow";
 }
 else if(box3 < box1 && box3 > box2){
    document.querySelector("#member-3").style.background = "yellow";
 }


 if(box1 < box2 && box1 < box3){
    document.querySelector("#member-1").style.background = "red";
 }
 else if(box2 < box1 && box2 < box3){
    document.querySelector("#member-2").style.background = "red";
 }
 else if(box3 < box1 && box3 < box2){
    document.querySelector("#member-3").style.background ="red";
 }


 if(box1 == box2){
    document.querySelector("#member-1").style.background="blue";
    document.querySelector("#memer-2").style.background="blue";
    document.querySelector("#name").innerHTML="Match Tie Betweent Member 1 and  Member 2";
 }
 else if(box1 == box3){
    document.querySelector("#member-1").style.background="blue";
    document.querySelector("#member-3").style.background="blue";
    document.querySelector("#name").innerHTML="Match Tie Between Member 1 and Member 3";
 }
 else if(box2 == box1){
    document.querySelector("#member-2").style.background="blue";
    document.querySelector("#member-1").style.background="blue";
    document.querySelector("#name").innerHTML="Match Tie Between Member 2 and Member 1";
 }
 else if(box2 == box3){
    document.querySelector("#member-2").style.background="blue";
    document.querySelector("#member-3").style.background="blue";
    document.querySelector("#name").innerHTML="Match Tie Between Member 2 and Member 3";
 }
 else if(box3 == box1){
    document.querySelector("#member-3").style.background="blue";
    document.querySelector("#member-1").style.background="blue";
    document.querySelector("#name").innerHTML="Match Tie Between Member 3 and Member 1";
 }
 else if(box3 == box2){
    document.querySelector("#member-3").style.background="blue";
    document.querySelector("#member-2").style.background="blue";
    document.querySelector("#name").innerHTML="Match Tie Between Member 3 and Member 2";
 }

 else if((box2 == box1)==box3){
    document.querySelector("#member-2").style.background="blue";
    document.querySelector("#member-1").style.background="blue";
    document.querySelector("#member-3").style.background="blue";
    document.querySelector("#name").innerHTML="Match Tie with Member1 Member2 and Member3";
 }

}