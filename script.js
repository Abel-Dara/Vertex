
var countDownDate = new Date("jul 8, 2029 23:59:59").getTime();


var x = setInterval(function() {

    var now = new Date().getTime();


    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const newLocal = Math.floor((distance % (10 * 60)) / 10);

    document.getElementById("countdown").innerHTML ='MY GOAL' +  days  + "d " + hours + " h" + minutes + " m"  +seconds + " s" ;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById(" +' '+ countdown").innerHTML = "EXPIRED";
    }
}, 1000);



function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");

  const content = document.querySelector(".content");
  if (sidebar.classList.contains("open")) {
    content.style.marginLeft = "250px";
  } else {
    content.style.marginLeft = "0";
  }
}
