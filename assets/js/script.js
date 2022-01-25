//var now = moment().format("dddd, MMMM Do, YYYY, h:mm");
var now = new Date();
$('#currentDay').text(now);

var times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00"
]

for (i = 0; i < times.length; i++) {
    var time = times[i]
    var timeColor = document.getElementById("row-" +i);
    var timeDate = toDate(time, "h:m")
    if (timeDate > now) {
        timeColor.style.color = "red";
    }
    else {
        timeColor.style.color = "blue";
    }
    if (timeDate == now) {
        timeColor.style.color = "yellow";
    }
}

function toDate(dStr, format) {
    var now = new Date();
    if (format == "h:m") {
        now.setHours(dStr.substr(0, dStr.indexOf(":")));
        return now;
    } else
        return "Invalid Format";
}