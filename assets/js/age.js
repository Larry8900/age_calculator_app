// initialize the current date method
 
    const today = new Date(); 
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    const currentYear = today.getFullYear()


// input fields
    const day_input = document.querySelector('.day_input');
    const month_input = document.querySelector('.month_input');
    const year_input = document.querySelector('.year_input')

// error field
const error_day = document.getElementById("error_day")
const error_month = document.getElementById("error_month")
const error_year = document.getElementById("error_year")

const error_label1 = document.querySelectorAll("label")[0];
const error_label2 = document.querySelectorAll("label")[1];
const error_label3 = document.querySelectorAll("label")[2];

// this function ensures that user month input < 10 is prepended with a 0

const updateText = function (){
    day_input.value = ("0" + day_input.value).slice(-2)
}

const updateText2 = function () {
    month_input.value = ("0" + month_input.value).slice(-2)
}

// day_input.addEventListener('keyup', updateText)
// month_input.addEventListener('keyup', updateText2)

const calculateBtn = document.querySelector('.calculate-btn')


calculateBtn.addEventListener('click', (e) => {
    
    day_input.classList.remove("error-Active");
    month_input.classList.remove("error-Active");
    year_input.classList.remove("error-Active");

    error_label1.classList.remove("error-label");
    error_label2.classList.remove("error-label");
    error_label3.classList.remove("error-label");

    error_day.innerHTML = "";
    error_month.innerHTML = "";
    error_year.innerHTML = "";


    const invalid1 = isNaN(day_input.value) || day_input.value > 31;
    const invalid2 = isNaN(month_input.value) || month_input.value > 12  ;
    const invalid3 = isNaN(year_input.value) || year_input.value > currentYear;

    // This checks and display appropriate error message depending on the empty field
    if(invalid1){
        day_input.classList.add("error-Active");
        error_label1.classList.add("error-label");
        error_day.innerHTML = "This field is required";

    }else if (invalid2){
        month_input.classList.add("error-Active");
        error_label2.classList.add("error-label");
        error_month.innerHTML = "This field is required"
    }else if(invalid3){
        year_input.classList.add("error-Active");
        error_label3.classList.add("error-label");
        error_year.innerHTML = "This field is required"
    }else if(invalid1 && invalid2){
        day_input.classList.add("error-Active");
        month_input.classList.add("error-Active");
        error_label1.classList.add("error-label");
        error_label2.classList.add("error-label");
        error_month.innerHTML = "This field is required"
        error_day.innerHTML = "This field is required";
    }else if (invalid2 && invalid3){
        month_input.classList.add("error-Active");
        year_input.classList.add("error-Active");
        error_label2.classList.add("error-label");
        error_label3.classList.add("error-label");
        error_month.innerHTML = "This field is required"
        error_year.innerHTML = "This field is required"
    }else if(invalid1 && invalid3) {
        day_input.classList.add("error-Active");
        error_label1.classList.add("error-label");
        error_day.innerHTML = "This field is required";
        year_input.classList.add("error-Active");
        error_label3.classList.add("error-label");
        error_year.innerHTML = "This field is required"
    }
    else if (invalid1 && invalid2 && invalid3){
        day_input.classList.add("error-Active");
        month_input.classList.add("error-Active");
        year_input.classList.add("error-Active");
        error_label1.classList.add("error-label");
        error_label2.classList.add("error-label");
        error_label3.classList.add("error-label");
        error_day.innerHTML = "This field is required";
        error_month.innerHTML = "This field is required"
        error_year.innerHTML = "This field is required"
    } else{
        leapYear();
    }
});
// leap year function

function leapYear(){
    var userYear = parseInt(year_input.value);
    if ((userYear % 4 === 0 && userYear % 100 !== 0) ||( userYear % 400 === 0) || (month_input.value == 2)){
        leapYearTest();
    }
    else{
        valiDate();
    }
}

// // checks if the entered month is february
function leapYearTest() {
    var userMonth = parseInt(month_input.value);
    if (userMonth === 2) {
        leapYearError();
    } else {
        valiDate()
    }
}

// // checks if the entered day is greater than 29 
function leapYearError() {
    let userDay = parseInt(day_input.value);
    if (userDay > 29) {
        error_day.innerHTML = "There are only 29 days";
        day_input.classList.add("error-Active")
        error_label1.classList.add("error-label")
    }else {
        calDate();
    }
}
// // checks the validity of the user input 

function valiDate() {
    let userDay = parseInt(document.querySelector(".day_input").value);
    let userMonth = parseInt(document.querySelector(".month_input").value);
    let userYear = parseInt(document.querySelector(".year_input").value);

    day_input.classList.remove("error-Active");
    month_input.classList.remove("error-Active");
    year_input.classList.remove("error-Active");

    let userDayError = document.getElementById("error_day");
    let userMonthError = document.getElementById("error_month");
    let userYearError = document.getElementById("error_year");

    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getUTCFullYear();

    if (userYear > currentYear || userMonth > 12 || userDay > 31) {
        showError();
    }else if (
        userYear === currentYear && 
        userMonth === currentMonth && 
        userDay > currentDay
    ) {
        showError();
    }else if (userYear > currentYear) {
        showError();
    } else if (userMonth > 12) {
        showError();
    }else if (
        (userMonth === 1 ||
            userMonth === 3 ||
            userMonth === 5 ||
            userMonth === 7 ||
            userMonth === 8 ||
            userMonth === 10 ||
            userMonth === 12) &&
        userDay > 30
    ) {
        showError();
        day_input.classList.add("error-Active")
    } else if (
        (userMonth === 4 ||
            userMonth === 6 ||
            userMonth === 9 ||
            userMonth === 11) &&
        userDay > 30
    ){
        showError();
        day_input.classList.add("error-active");
    } else if (userMonth === 2 && userDay < 29) {
        calDate();
    }else if (
        userMonth === 4 ||
        userMonth === 6 ||
        userMonth === 9 ||
        (userMonth === 11 && userDay < 31)
    ) {
        calDate();
    } else if (
        userMonth === 1 ||
        userMonth === 3 ||
        userMonth === 5 ||
        userMonth === 7 ||
        userMonth === 8 ||
        userMonth == 10 ||
        (userMonth === 12 && userDay < 32)
    ) {
        calDate();
    }else {
        showError();
    }

//     // This error handles the custom error messages 

    function showError(){

            if (userYear > currentYear || userMonth > 12 || userDay > 31) {
                userDayError.textContent = "Must be a valid day";
                userMonthError.textContent = "Must be a valid month";
                userYearError.textContent = "Must be in the past";

                day_input.classList.add("error-Active");
                month_input.classList.add("error-Active");
                year_input.classList.add("error-Active");
        } else if (userYear === currentYear && userMonth > currentMonth) {
            userDayError.textContent = 'Must be a valid day';
            userMonthError.textContent = "Must be a valid month";
            userYearError.textContent = "Must be in the past";

            day_input.classList.add("error-Active");
            month_input.classList.add("error-Active");
            year_input.classList.add("error-Active");
        } else if ( 
            userYear === currentYear &&
            userMonth === currentMonth &&
            userDay > currentDay
        ) {
            error_day.textContent = "Must be a valid day";
            error_month.textContent = "Must be a valid month";
            error_year.textContent = "Must be in the past";

            day_input.classList.add("error-Active");
            month_input.classList.add("error-Active");
            year_input.classList.add("error-Active")

        } else if (userYear > currentYear) {
            error_year.textContent = "Must be in the past";
            year_input.classList.add("error-Active")
        } else if (userMonth > 12 && userDay > 31) {
            error_day.textContent = "Must a valid day";
            error_month.textContent = "Must a valid month";

            month_input.classList.add("error-Active");
            day_input.classList.add("error-Active")
        }else if (userMonth > 12) {
            error_month.textContent = "Must be a valid month"
            month_input.classList.add("error-Active");
        }else if (
            (userMonth === 1 ||
            userMonth === 3 ||
            userMonth === 5 ||
            userMonth === 7 ||
            userMonth === 8 ||
            userMonth === 10 ||
            userMonth === 12) &&
        userDay > 31) {
            error_day.textContent = "There are only 31 days";
            day_input.classList.add("error-Active")
        } else if (
            (userMonth === 4 ||
            userMonth === 6 ||
            userMonth === 9 ||
            userMonth === 11) &&
        userDay > 30) {
            error_day.textContent = "There are only 30 days";
            day_input.classList.add("error-Active")
        } else if (userDay > 31) {
            error_day.textContent = "Must be a valid day"
            day_input.classList.add("error-Active")
        }

    }
}
// // This function calculates the users age
function calDate() {
    
    //Gets input from useer and converts it from string to number 
    var userDay = parseInt(day_input.value);
    var userMonth = parseInt(month_input.value);
    var userYear = parseInt(year_input.value);

    //current date
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1 ;
    const currentYear = date.getFullYear();

    // resulting dates
    var resultingMonth,
        resultingDay,
        resultingYear = 0;

    //calculates the users age 
    
    resultingYear = Math.abs(userYear - currentYear);
    resultingMonth = Math.abs(userMonth - currentMonth);
    resultingDay = Math.abs(userDay - currentDay);

    //output message
    let text1 = document.getElementById("show_years");
    let text2 = document.getElementById("show_months");
    let text3 = document.getElementById("show_days");
    const load = () => {
        animate(text1, 0, resultingYear, 1000);
        animate(text2, 0, resultingMonth, 1000);
        animate(text3, 100, resultingDay, 1000);
    };
    load();
   
}

// Animate function

function animate(obj, initVal, lastVal, duration) {
    var obj;
    let startTime = null;
  
    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();
  
    //pass the current timestamp to the step function
    const step = (currentTime) => {
      //if the start time is null, assign the current time to startTime
      if (!startTime) {
        startTime = currentTime;
      }
  
      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime - startTime) / duration, 1);
  
      //calculate what to be displayed using the value gotten above
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
  
      //checking to make sure the counter does not exceed the last value
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    };
    //start animating
    window.requestAnimationFrame(step);
  
}
  