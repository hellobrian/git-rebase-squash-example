var deadline = "Jul 25 2016 18:40:18 GMT-0400";

}
function run_clock(id, endtime) {
var clock = document.getElementById(id);

// get spans where our clock numbers are held
var days_span = clock.querySelector(".days");
var hours_span = clock.querySelector(".hours");
var minutes_span = clock.querySelector(".minutes");
var seconds_span = clock.querySelector(".seconds");

function update_clock() {
var t = time_remaining(endtime);

// update the numbers in each part of the clock
days_span.innerHTML = t.days;
hours_span.innerHTML = ("0" + t.hours).slice(-2);
minutes_span.innerHTML = ("0" + t.minutes).slice(-2);
seconds_span.innerHTML = ("0" + t.seconds).slice(-2);

if (t.total <= 0) {
clearInterval(timeinterval);
}
}
update_clock();
var timeinterval = setInterval(update_clock, 1000);
}
run_clock("clockdiv", deadline);
