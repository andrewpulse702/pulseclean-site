let slider = document.querySelector(".slider");

if(slider){

slider.addEventListener("input",function(){

let before = document.querySelector(".before");

before.style.width = slider.value + "%";

});

}