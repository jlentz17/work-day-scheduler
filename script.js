var hour9 = document.querySelector("#hour9").innerText;
var hour10 = document.querySelector("#hour9").innerText;
var hour11 = document.querySelector("#hour9").innerText;
var hour12 = document.querySelector("#hour9").innerText;
var hour13 = document.querySelector("#hour9").innerText;
var hour14 = document.querySelector("#hour9").innerText;
var hour15 = document.querySelector("#hour9").innerText;
var hour16 = document.querySelector("#hour9").innerText;
var hour17 = document.querySelector("#hour9").innerText;

// if text input, then save to local stoarge

// make funct for save button on click

$(".button").on("click", function () {
  var saveEvent = $(this).siblings("textarea").val();
  var eventId = $(this).siblings("textarea").attr("id");
  $(this).addClass(".buttonSelected");
  localStorage.setItem(eventId, saveEvent);
});


// $(".button").on("click", function () {
//   var saveEvent = $(this).siblings("#event1").val();
//   var eventId = $(this).siblings("#event1").attr("id");
//   $(this).addClass(".buttonSelected");
//   localStorage.setItem("hour9", saveEvent);
// });


// $(".button").on("click", function () {
//   var saveEvent = $(this).siblings("#event1").val();
//   var eventId = $(this).siblings("#event1").attr("id");
//   $(this).addClass(".buttonSelected");
//   localStorage.setItem("hour9", saveEvent);
// });


// $(".button").on("click", function () {
//   var saveEvent = $(this).siblings("#event1").val();
//   var eventId = $(this).siblings("#event1").attr("id");
//   $(this).addClass(".buttonSelected");
//   localStorage.setItem("hour9", saveEvent);
// });


// $(".button").on("click", function () {
//   var saveEvent = $(this).siblings("#event1").val();
//   var eventId = $(this).siblings("#event1").attr("id");
//   $(this).addClass(".buttonSelected");
//   localStorage.setItem("hour9", saveEvent);
// });


// $(".button").on("click", function () {
//   var saveEvent = $(this).siblings("#event1").val();
//   var eventId = $(this).siblings("#event1").attr("id");
//   $(this).addClass(".buttonSelected");
//   localStorage.setItem("hour9", saveEvent);
// });


// $(".button").on("click", function () {
//   var saveEvent = $(this).siblings("#event1").val();
//   var eventId = $(this).siblings("#event1").attr("id");
//   $(this).addClass(".buttonSelected");
//   localStorage.setItem("hour9", saveEvent);
// });


// $(".button").on("click", function () {
//   var saveEvent = $(this).siblings("#event1").val();
//   var eventId = $(this).siblings("#event1").attr("id");
//   $(this).addClass(".buttonSelected");
//   localStorage.setItem("hour9", saveEvent);
// });


// $(".button").on("click", function () {
//   var saveEvent = $(this).siblings("#event1").val();
//   var eventId = $(this).siblings("#event1").attr("id");
//   $(this).addClass(".buttonSelected");
//   localStorage.setItem("hour9", saveEvent);
// });
