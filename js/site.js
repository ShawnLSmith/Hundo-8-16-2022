//Get the Values from the interface
//Starts our controller function
function getValues() {

    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let numbers = [];

    //we need to validate our input
    //Parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        numbers = generateNumbers(startValue, endValue);
        //we call displayNumbers
        displayNumbers(numbers);
    }
    else {
        alert("You must enter integers");
    }    

}

//Generate numbers fro the startValue to the endValue
//Logic function(s)
function generateNumbers(sValue, eValue){    
        
    let numbers = [];
    
    //we want to get all numbers from start to end.
    //index = index + 1; >>>>> same as index++
    for(let index = sValue; index <= eValue; index++){
        
        //This will execute in a loop until index = endValue.
        numbers.push(index);
    }        
    
    return numbers;    
}

//Display the numbers and mark even numbers bold
//Display or view function(s)
function displayNumbers(numbers){
    
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className ="even";

        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</tr></td>`;

    }

    document.getElementById("results").innerHTML = templateRows;
}