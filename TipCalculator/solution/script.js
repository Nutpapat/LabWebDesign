// script.js

// Custom function
function calculateTip() {

    // Store the data of inputs
    // *** 1.Modified these code to get the proper inputs
    var billAmount = parseFloat(document.querySelector('#billAmount').value);
    var serviceQuality = parseFloat(document.querySelector('#serviceQuality').value);
    var numPeople = parseInt(document.querySelector('#totalPeople').value);

    // Quick validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter some values to get this baby up and running!");
        return; // this will prevent the function from continuing
    }

    // Check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // *** 2.Modify the code here to do some math!
    var total = (billAmount*serviceQuality)/numPeople;
    total = total.toFixed(2);


    // Display the tip!
    document.getElementById("totalTip").style.display = "block";
    // *** 3.Modify this line to output the result to the page
    document.querySelector('#tip').innerText = total;

}

document.querySelector('#btn-calculate').onclick = calculateTip;
// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
