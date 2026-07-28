const button = document.getElementById("calculateBtn");

const bagsInput = document.getElementById("bags");

const result = document.getElementById("result");

const error = document.getElementById("errorMessage");


button.addEventListener("click", function(){


    // Get the number entered by the user

    let bags = Number(bagsInput.value);



    // Validation

    if (bagsInput.value === "") {

        error.innerHTML = 
        "Please enter the number of bags.";

        result.innerHTML = "";

        return;
    }



    if (bags < 0) {

        error.innerHTML =
        "Number of bags cannot be negative.";

        result.innerHTML = "";

        return;
    }



    // Calculation

    let co2 = bags * 20;



    // Display result

    result.innerHTML =
    "Your plastic bags produce approximately "
    + co2
    + " grams of CO₂.";



    error.innerHTML = "";


});