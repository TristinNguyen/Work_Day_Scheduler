//displays current day
$(document).ready(function () {
    const date = $("#currentDay")
    date.text(moment().format("dddd, MMMM Do, YYYY"));

    const nineAm = $("#9am")
    const tenAm = $("#10am")
    const elevenAm = $("#11am")
    const twelveAm = $("#12am")
    const onePm = $("#1pm")
    const twoPm = $("#2pm")
    const threePm = $("#3pm")
    const fourPm = $("#4pm")
    const fivePm = $("#5pm")

    var timeArray = [
        nineAm,
        tenAm,
        elevenAm,
        twelveAm,
        onePm,
        twoPm,
        threePm,
        fourPm,
        fivePm
    ]



    let button = $(".saveBtn").click(function () {
        var task = $(this).prev().val()
        var hour = $(this).prev().prev().text()
        localStorage.setItem(hour, task)
    });


    function getFromLocalStorage() {
        textArea.text = localStorage.getItem("")
    }

    function init() {
        getFromLocalStorage()

        for (let i = 0; i < timeArray.length; i++) {
            const element = timeArray[i];
            console.log(element);


            $(timeArray).children().val
            //console.log($("#"+timeArray).children().children().siblings())
            localStorage.getItem(timeArray)
            //use time array
        }
    }

    init();
});