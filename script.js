var hour9 = document.querySelector("#hour9").innerText;
var hour10 = document.querySelector("#hour10").innerText;
var hour11 = document.querySelector("#hour11").innerText;
var hour12 = document.querySelector("#hour12").innerText;
var hour13 = document.querySelector("#hour13").innerText;
var hour14 = document.querySelector("#hour14").innerText;
var hour15 = document.querySelector("#hour15").innerText;
var hour16 = document.querySelector("#hour16").innerText;
var hour17 = document.querySelector("#hour17").innerText;

var timeBlock = document.querySelector(".time-block");

var textArea = document.querySelectorAll(".description");
console.log(textArea);


// Used Moment.js to print Current Time to jumbotron

var currentTime = moment().format("LLLL");
$("#currentDay").text(currentTime);

var militaryTime = moment().format("H");
console.log(militaryTime);


// make a function called hourblock with for loop that starts at 9th hour and ends at 17th hour and increments. Compare for loop index with current time. And if index time is less than current time, then turn green: equal to it, be green and red be past using classes already set in css


// change each textarea id to be 9 10 11.......
// inside of for each element.classlist.add(backgroundColor (element.id))

function hourBlock() {
  textArea.forEach(element => {
    console.log(element.id)
    element.classList.add(backgroundColor(element.id))
    });
    // textArea.classList.add(backgroundColor(i));
    // console.log(militaryTime);
}
hourBlock();

function backgroundColor(time){
  var backgroundClass; 
  if (time < militaryTime) {
    backgroundClass = "past"
  } else if (time === militaryTime) {
    backgroundClass = "present"
  } else {
    backgroundClass = "future"
  }
  return backgroundClass;
}
// if text input, then save to local stoarge



// make funct for save button on click

$(".saveBtn").on("click", function () {
  var saveEvent = $(this).siblings("textarea").val();
  var eventId = $(this).siblings("textarea").attr("id");
  $(this).addClass(".buttonSelected");
  localStorage.setItem(eventId, saveEvent);
});


$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));