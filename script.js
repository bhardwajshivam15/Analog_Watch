const deg = 6;
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(()=>{

let date = new Date();
let hr1 = 30*date.getHours();
let mn1 = deg*date.getMinutes();
let sc1 = deg*date.getSeconds();
hour.style.transform = `rotateZ(${(hr1)+(mn1/12)}deg)`;
min.style.transform = `rotateZ(${mn1}deg)`;
sec.style.transform = `rotateZ(${sc1}deg)`;
})