function changeColor(form1){
  for(var i=0; i<document.form1.color.length; i++){
    if(document.form1.color[i].checked){
      alert(document.form1.color[i].value);
      return;
      }
  }
}
function chooseConcentration(form1){
  for(var i=0;i<document.form1.KCGgroup.options.length;i++){
    if(document.form1.KCGgroup.options[i].selected){
      alert(document.form1.KCGgroup.options[i].text);
    }
  }
}
function chooseHobby(form1){
  var str="";
  for(var i=0;i<document.form1.hobby.length;i++){
    if(document.form1.hobby.options[i].selected){
      if(str!=""){
        str=str+",";
      }
      str=str+document.form1.hobby.options[i].text;
    }
  }
  alert(str);
}
function languageLearned(form1){
  var items=document.getElementsByName('language');
  var selectedItems="";
  for(var i=0;i<items.length;i++){
    if(items[i].type=="checkbox" && items[i].checked==true){
      selectedItems+=items[i].value+"\n";
    }
  }
  alert(selectedItems);
}
// loading jsworld page
// $("ul li a, .sidebar a").on("click", function(){
//   let url=$(this).attr("href");
//   $("#maincontent").load(url);
//   return false;
// });
//
// // LoADING deffault page home.html
// function defaultPage(){
//   let url="partials/home.html";
//   $("#maincontent").load(url);
// }

// Open and close Window
var myWindow;


function openWin() {
  myWindow = window.open("https://www.youtube.com", "myWindow", "width=500, height=400");
}

function closeWin() {
  myWindow.close();
}

// Move window
var win;
function openMoveWindow() {
  win = window.open("", "win", "width=200, height=100");
  win.document.write("<p>'Moving Window'</p>");
}

function moveWindow() {
  win.moveBy(250, 250);
  win.focus();
}

function closeWindow(){
  win.close();
}

//Resize By window
var rwindow;
function openResizeWindow() {
  rwindow = window.open("", "Resizing Window", "width=100, height=100");
}

function resizeWindow() {
  rwindow.resizeBy(250, 250);
  rwindow.focus();
}
function closeResizeWindow(){
  rwindow.close();
}

// Loading image
$(".imgNav ul li a").on("click", function(){
  let url=$(this).attr("href");
  $("#displayImage").load(url);
  return false;
});

// Hide and Show image
function hideImage(){
  $(".imageHideTab").hide(1000);
}
function showImage(){
  $(".imageHideTab").show(1000);
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

// Hide Collepse navbar
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
