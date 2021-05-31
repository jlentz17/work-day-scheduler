var hour9 = document.querySelector("#hour9").innerText;
var hour10 = document.querySelector("#hour10").innerText;
var hour11 = document.querySelector("#hour11").innerText;
var hour12 = document.querySelector("#hour12").innerText;
var hour13 = document.querySelector("#hour13").innerText;
var hour14 = document.querySelector("#hour14").innerText;
var hour15 = document.querySelector("#hour15").innerText;
var hour16 = document.querySelector("#hour16").innerText;
var hour17 = document.querySelector("#hour17").innerText;

// Used Moment.js to print Current Time to jumbotron

var time = moment().format("LLLL");
$("#currentDay").text(time);


// make a function called time with for loop that starts at 9th hour and ends at 17th hour and increments. Compare for loop index with current time. And if index time is less than current time, then turn green: equal to it, be green and red be past using classes already set in css

// if text input, then save to local stoarge



// make funct for save button on click

$(".saveBtn").on("click", function () {
  var saveEvent = $(this).siblings("textarea").val();
  var eventId = $(this).siblings("textarea").attr("id");
  $(this).addClass(".buttonSelected");
  localStorage.setItem(eventId, saveEvent);
});


$("#event1").val(localStorage.getItem("event1"));
$("#event2").val(localStorage.getItem("event2"));
$("#event3").val(localStorage.getItem("event3"));
$("#event4").val(localStorage.getItem("event4"));
$("#event5").val(localStorage.getItem("event5"));
$("#event6").val(localStorage.getItem("event6"));
$("#event7").val(localStorage.getItem("event7"));
$("#event8").val(localStorage.getItem("event8"));
$("#event9").val(localStorage.getItem("event9"));