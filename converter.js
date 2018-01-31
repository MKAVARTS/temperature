var celsius; // celsius variable
var farenheit; // farenheit variable
var convert = document.getElementById("convert"); // grab convert button location from HTML
var conversion = document.getElementById("conversion");
var togg= document.getElementById('togg') // grab celsius to farenheit toggle button from HTML 
var clear = document.getElementById('clear'); // grab instance of clear button
var counter = 0; // counter for toggle button 
togg.innerHTML = 'Farenheit to Celsius'; // intialize toggle button 

convert.addEventListener("click", converter); // when convert button is pressed, run conversion function 
togg.addEventListener("click", count) // when C/F or F/C button is pressed, run count function 
clear.addEventListener("click", clearFunc);


// when clear button is pressed, this function is run. Uses reset() to clear "form" that wraps the input field in HTML.
function clearFunc(){
    document.getElementById('input').reset();
    conversion.innerHTML = " ";
    console.log('working');
}

// count function: counter goes from 0 to 1; condition applies proper text to button 
function count (){
    counter++;
    counter = counter % 2;
    console.log(counter);
    if(counter === 0) {
        togg.innerHTML = 'Farenheit to Celsius';
    }
    if(counter === 1) {
        togg.innerHTML = 'Celsius to Farenheit';
}
}


// conversion function: if counter is 0, Farenheit to Celsius, if counter is 1, Celsius to Farenheit 
function converter () {
    var number = parseInt(document.getElementById('number').value);
    if(counter === 0);{
        // number = parseInt(document.getElementById('number').value);
        celsius = (number - 32) * 5/9;
        if(celsius >= 32){
            conversion.style.color = 'red';
        } else if(celsius <= 0){
            conversion.style.color="blue";
        }
        else{
            conversion.style.color = 'green';
        }
        conversion.innerHTML = celsius.toFixed('2') + ' Celsius';
    }
    if(counter === 1){
        // number = parseInt(document.getElementById('number').value);
        farenheit = (number * 9/5) + 32;
        if(farenheit >= 90){
            conversion.style.color = 'red';
        }else if(farenheit <= 32){
            conversion.style.color = "blue";
        }
        else{
            conversion.style.color = 'green';
        }
        conversion.innerHTML = farenheit.toFixed('2') + ' Farenheit';
    }
}


