/* Set Available Dates */
var availableDates = ["5-4-2023", "6-4-2023", "7-4-2023", "9-4-2023", "10-4-2023", "11-4-2023", "12-4-2023", "13-4-2023"];
function available(date) {
  dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  if ($.inArray(dmy, availableDates) != -1) {
    return [true, "", "Available"];
  } else {
    return [false, "", "unAvailable"];
  }
}

/* Set Date Fuction */
function setDate(date) {
  console.log(date);
  if (date) {
    document.querySelector(".selected .selected__date").textContent = date;
  }
}

/* Set Time Fuction */
function setTime(time) {
  console.log(time);
  if (time) {
    document.querySelector(".selected .selected__time").textContent = time;
  }
}

/* Date Picker */
$(function () {
  if (document.querySelector("#datepicker")) {
    $("#datepicker").datepicker({
      beforeShowDay: available,
      onSelect: function (dateText, inst) {
        setDate(dateText);
      },
    });
  }
});

/* Time Slot Set */
var timeSlots = document.querySelectorAll(".time-slot");
if (timeSlots) {
  timeSlots.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      setTime(this.innerText);
    });
  });
}
