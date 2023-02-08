window.addEventListener("mouseover", play);
window.addEventListener("click", play);
function play() {
  document.getElementById("a").play();
}

alert("FOR BEST EXPERIENCE HAVE DESKTOP VIEW ! ");

alert("Tap on Screen to enjoy birthday song🎶");
alert("ADVANCE HAPPY BIRTHDAY Minakshi");
var a = new Date();
var y = a.getFullYear();

var mon = a.getMonth() + 1;
var da = a.getDate();
if (mon >= 9 || da >= 23) y = y + 1;
//var eventDate = new Date(y, 2, 12, 0, 0, 0, 0);
eventDate = new Date("Feb 12, 2023  ").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var remain = eventDate - now;

  var s = Math.floor(remain / 1000);
  var m = Math.floor(remain / (1000 * 60));
  var h = Math.floor(remain / (1000 * 60 * 60));
  var d = Math.floor(remain / (1000 * 60 * 60 * 24));

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("days").textContent = d;
  document.getElementById("hours").textContent = h;
  document.getElementById("minutes").textContent = m;
  document.getElementById("seconds").textContent = s;
}, 1000);

var prs = document.getElementsByTagName("p");

function printTime() {
  var mcount;
  var dcount;
  var i;
  var d = new Date();
  var years = d.getFullYear();
  var months = d.getMonth() + 1;
  var days = d.getDate();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var millis = d.getMilliseconds();

  if (months == 9 && days == 23) prs[1].innerHTML = "HAPPY BIRTHDAY MINAKSHI";
  else {
    prs[1].innerHTML = "ADVANCE HAPPY BIRTHDAY MINAKSHI";
  }
}

setInterval(printTime, 1);
