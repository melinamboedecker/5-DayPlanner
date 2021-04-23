//Display Current Day of week and month and date
var currentDay = moment().format("dddd, MMMM Do");
$("#current-day").text(currentDay);

//Change background color of text fields depending on current time
var currentTime = parseInt(moment().format("H"));
console.log(currentTime);



 var am9 = moment().format("H");
 var tryIt = $('#9')
 tryIt.text(am9);

var rows = $(".col-6");
rows.text("Hello");

var rowsArray = Array.from(rows);
console.log(rowsArray);

console.log(rowsArray[5].id);

for (var i = 0; 1 < rowsArray.length; i++) {
    let tempid = parseInt(rowsArray[i].id);
    console.log(tempid);
    if (tempid < currentTime) {
        $(rowsArray[i]).addClass('red');
    } else
    if (tempid === currentTime) {
        $(rowsArray[i]).addClass('gray');
    } else 
    if (tempid > currentTime) {
        $(rowsArray[i]).addClass('green');
    } 
    else ($rowsArray[i]).addClass('white');
}

//  Array.from(rows).forEach(row => {
//      console.log(row.id);
//     let
//       rowIdString = row.id,
//       rowHour;
//     if (rowIdString) {
//       rowHour = parseInt(rowIdString);
//       console.log(rowHour);
//     }
//     if (rowHour) {
//       // Compares row id to current hour and sets color accordingly
//       if (currentTime === rowHour) {
//         setColor(row, "red");
//       } else if ((currentTime < rowHour) && (currentTime > rowHour - 6)) {
//         setColor(row, "green");
//       } else if ((currentTime > rowHour) && (currentTime < rowHour + 6)) {
//         setColor(row, "lightgrey");
//       } else {
//         setColor(row, "white");
//       }
//     }
//   });

//   function setColor(element, color) {
//     element.style.backgroundColor = color;
//   }












