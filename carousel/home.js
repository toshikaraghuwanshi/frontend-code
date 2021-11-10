// simple method

var button1 = document.getElementsByTagName("button")[0];
var button2 = document.getElementsByTagName("button")[1];
var button3 = document.getElementsByTagName("button")[2];
var button4 = document.getElementsByTagName("button")[3];
var button5 = document.getElementsByTagName("button")[4];

var slide3 = document.getElementById("img3");
var slide1 = document.getElementById("img1");
var slide2 = document.getElementById("img2");
var slide4 = document.getElementById("img4");
var slide5 = document.getElementById("img5");

button3.addEventListener("click", function(){
    slide3.classList.add("active");
    slide1.classList.remove("active");
    slide2.classList.remove("active");
    slide4.classList.remove("active");
    slide5.classList.remove("active");

});
button1.addEventListener("click", function(){
    slide1.classList.add("active");
    slide3.classList.remove("active");
    slide2.classList.remove("active");
    slide4.classList.remove("active");
    slide5.classList.remove("active");

});
button2.addEventListener("click", function(){
    slide2.classList.add("active");
    slide1.classList.remove("active");
    slide3.classList.remove("active");
    slide4.classList.remove("active");
    slide5.classList.remove("active");

});
button4.addEventListener("click", function(){
    slide4.classList.add("active");
    slide1.classList.remove("active");
    slide2.classList.remove("active");
    slide3.classList.remove("active");
    slide5.classList.remove("active");

});
button5.addEventListener("click", function(){
    slide5.classList.add("active");
    slide1.classList.remove("active");
    slide2.classList.remove("active");
    slide3.classList.remove("active");
    slide4.classList.remove("active");

});