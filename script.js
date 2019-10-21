var balls = [
  document.getElementById("one"),
  document.getElementById("two"),
  document.getElementById("three"),
  document.getElementById("four"),
  document.getElementById("five"),
  document.getElementById("six"),
  document.getElementById("seven"),
  document.getElementById("eight")
]

for(var x=1; x<8; x++) {
  balls[x].style.visibility = "hidden"
}

setTimeout(function(){
    balls[1].style.visibility = "visible"
}, 6000);

setTimeout(function(){
    balls[2].style.visibility = "visible";
    balls[3].style.visibility = "visible"
}, 12000);

setTimeout(function(){
    balls[4].style.visibility = "visible";
    balls[5].style.visibility = "visible"
}, 18000);

setTimeout(function(){
    balls[6].style.visibility = "visible";
    balls[7].style.visibility = "visible"
}, 24000);