let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  /*
    12 hours = 360deg
    1 hour = 30deg
    h hours = 30h deg + x

    60 min = 30deg
    1 min = 1/2deg
    m min = m/2 deg
    x = m/2 deg

    60 min = 360deg
    1 min = 6deg
    m min = 6m deg

    60 sec = 360deg
    1 sec = 6deg
    s sec = 6s sec
*/

  let hRotations = 30 * hh + mm / 2;
  let mRotations = 6 * mm;
  let sRotations = 6 * ss;

  hr.style.transform = `rotate(${hRotations}deg)`;
  min.style.transform = `rotate(${mRotations}deg)`;
  sec.style.transform = `rotate(${sRotations}deg)`;
}
setInterval(displayTime, 1000);