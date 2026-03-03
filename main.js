function bmiCalculator() {

    let weight = Number(window.prompt("Enter your weight:"));
    let height = Number(window.prompt("Enter your height:"));

    //bmi formula :
    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        alert("Your BMI is " + bmi + "  you are Underweight");
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        alert("Your BMI is " + bmi + " you are Normal");
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        alert("Your BMI is " + bmi + " you are Overweight");
    } 
    else if (bmi >= 30 && bmi <= 34.9) {
        alert("Your BMI is " + bmi + " you are Obese");
    } 
    else if (bmi >= 35 && bmi <= 39.9) {
        alert("Your BMI is " + bmi + " you are Severely Obese");
    } 
    else {
        alert("Your BMI is " + bmi + " you are Morbidly Obese");
    }
}

bmiCalculator();