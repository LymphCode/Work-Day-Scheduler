// current date
var todayDate = moment().format('dddd, MMM Do');
$("#currentDay").html(todayDate);

// this is our 'save button's' click listener that saves our schedule input into the local storage 
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   
    // this is what tracks time and keeps us up to date
    function timeTracker() {
  
        var timeNow = moment().hour();

        // this is what finds the current time and associates by color for past, present, or future
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // pulls from local storage 
    for (let i = 9; i < 18; i++) {
        $(`#hour${i} .description`).val(localStorage.getItem(`hour${i}`));
      };

    timeTracker();
})