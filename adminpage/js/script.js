function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "block";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("btn1").style.display = "block";
  document.getElementById("btn2").style.display = "none";
  document.body.style.backgroundColor = "white";
}
