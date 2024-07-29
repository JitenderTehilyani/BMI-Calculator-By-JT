// select form 
let form = document.querySelector('#bmi-form');

form.addEventListener('submit', function(e) {

    // don't submit on server
    e.preventDefault();

    // get height value
    let height = parseInt(document.querySelector('#Height').value);
    // get weight value
    let weight = parseInt(document.querySelector('#Weight').value);
    // get result
    let result = document.querySelector('#result');

    // Reset result message
    result.innerHTML = '';

    // Validate height and weight
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please provide a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide a valid weight.";
    } else {
        // Calculate BMI
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        // Determine BMI category
        let category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        // Display result
        result.innerHTML = `Your BMI is ${bmi}. You are classified as ${category}.`;
    }
});

// Optionally, if you need additional logic on reset button (e.g., clearing result message manually):
form.addEventListener('reset', function() {
    document.querySelector('#result').innerHTML = '';
});
