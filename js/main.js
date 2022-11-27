/* 
    Use the website "https://jshint.com/", to check for errors in the code
    ALWAYS CHECK FOR ERRORS USING THE ONLINE VALIDATOR !!!
*/

/*
    Courtney Ferone - Task #9 (Using JS)

    Design Direction:
    Write functions to perform the various outputs requested
*/


/*

    The below line must be added to the html file to reference this source document: (must be located in the <body>   </body> tag)
        <script src="/js/main.js"></script>
        script src="/js/main.js": Tell the html file to reference the directory (folder) named js and use the main.js file
*/


/* 
    Assigning Variables:
        var (Defines a globally scoped variable, not really used anymore)
        let (Defines a variable which can be re-assigned later)
        const (Defines a variable which can NOT be directly re-assigned)

    Primitive Data Types:
        String (Can contain letters or numbers, uses double "" or single '' quotes)
        Numbers (There are no floats or decimal data types in JS)
        Boolean (Defines a variable as true or false)
        Null (A variable with nothing in it)
        Undefined (When we do not want to assign a value to a variable)
        Symbol (Added in ES6, uncommon data type)
*/

/*
    Function #1:
        Write a function that takes the input string and reverses it
*/
function reverseThisString(string) 
{
    // Setting an empty string variable (to accept user input)
    let reverseMe = "";
    // Using a "for loop" to accept the user's input and store it in our empty string
    for (let i = string.length - 1; i >= 0; i--) 
    {
        // Fill our string variable with the input
        reverseMe += string[i];
    }
    return reverseMe;
}

// Prompting the user for input
const stringToReverse = prompt("Type something for me to reverse: ");
// Setting reversedString = the user's input and using our function to reverse it
const reversedString = reverseThisString(stringToReverse);
// Output the result
// Have to use <br> in our writeln in order to force the output to a new line (like we do in HTML)
document.writeln("<br>JS Function #1 - Reversing a String");
document.writeln("<br>You entered: " + stringToReverse);
document.writeln("<br>Your input in reverse is: " + reversedString);
// End of reverseThisString


/*
    Function #2:
        Write a function that takes the input string and switches all uppercase characters to lowercase 
        and lowercase charcaters to uppercase
*/
function swapCase(string) 
{
    // .toUpperCase: A built in JS function which changes lowercase characters to uppercase
    let toUpper = string.toUpperCase();
    // .toLowerCase: A built in JS function which changes uppercase characters to lowercase
    let toLower = string.toLowerCase();
    /*
        .split: A built in JS functions which splits a string into an array of substrings (allowing us to separate upper from lower)
        If ("") is used as separator, the string is split between words (like done below)
    */
    let stringArrayToSwap = string.split("");
    // An empty array which will store our case swapped string (accepted as user input)  
    let swapMe = [];

    /*
        A for loop which iterates through the given string from the user and pushes each character into our empty array
        in the order it was recieved while swapping from lowercase to uppercase and uppercase to lowercase as it is filled
    */
    for(let i = 0; i < stringArrayToSwap.length; i++)
    {  
        if(stringArrayToSwap[i] === toUpper[i])
        { 
            swapMe.push(stringArrayToSwap[i].toLowerCase());
        } 
        if(stringArrayToSwap[i] === toLower[i])
        { 
            swapMe.push(stringArrayToSwap[i].toUpperCase());
        }
    } 
        /*
            .join: A built in JS function which creates and returns a new string by concatenating all of the elements in an array 
            (or an array-like object), separated by commas or a specified separator string (above, we used "" to separate between words)
        */
        return swapMe.join("");
}

// Prompting the user for input
const stringToSwap = prompt("Type something for me to CaSe sWaP: ");
// Setting swappedString = the user's input and using our function to case swap it
const swappedString = swapCase(stringToSwap);
// Output the result
document.writeln("<br><br>JS Function #2 - Case Swap a String");
document.writeln("<br>You entered: " + stringToSwap);
document.writeln("<br>Your input after case swapping is: " + swappedString);
// End of swapCase


/*
    Function #3:
        Convert an array of numbers from farenheit to celcius
*/
function toCelcius(array)
{
    /*  
        .map: A built in JS function
        When used on an array, it allows you to iterate through it and modify its elements using a callback function. 
        The callback function will then be executed on each of the array's elements
    */
   // Return the array after modifying the elements inside (turning given temperatures from farenheit to celcius)
    return array.map(
        function(convertTemp) 
        {
            // Turning all farenheit temperatures to celcius
            return (convertTemp - 32) * 5 / 9;
        }
    );    
}

// Defining the array with given arguments from Task #9
const givenTemperatures = [23, 32, 41, 50, 59];
// Setting farenheitToCelcius = the modified elements after my farenheit to celcius conversion
const farenheitToCelcius = toCelcius(givenTemperatures);
// Output the result
document.writeln("<br><br>JS Function #3 - Converting Temperatures from Farenheit to Celcius");
// Using .join(", ") to make the array output more visually appealing (forcing a space after the comma)
document.writeln("<br>The given temperatures were: " + givenTemperatures.join(", "));
document.writeln("<br>The temperatures when converted to celsius are: " + farenheitToCelcius.join(", "));
// End of toCelcius


/*
    Function #4:
        Write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
*/
function passOrFail(array)
{
    // A fast way to modify our numbers in such a way they return a true or false (boolean) value
    return array.map((x) => x >= 75);
}

// Defining the array with given arguments from Task #9
const givenNumbersToJudge = [20, 30, 50, 80, 90, 100];
// Setting passedOrFailed = True or False
const passedOrFailed = passOrFail(givenNumbersToJudge);
// Output the result
document.writeln("<br><br>JS Function #4 - Setting Numbers to Pass (>= 75) or Fail (< 75)");
document.writeln("<br>The given numbers were: " + givenNumbersToJudge.join(", "));
// Using a for loop to change "true" and "false" to "Pass" or "Fail" to match the desired wording of the task
for (let i = 0; i < passedOrFailed.length; i++) 
{
    if (passedOrFailed[i] == true) 
    {
        passedOrFailed[i] = "Pass";
    }
    if (passedOrFailed[i] == false) 
    {
        passedOrFailed[i] = "Fail";
    }
  }
document.writeln("<br>The decision to pass or fail the given numbers is: " + passedOrFailed.join(", "));
// End of passOrFail


/*
    Function #5:
        Write code that loops through the two variables and returns an array 
        ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
*/
function cardinalAndGerman()
{
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    document.writeln("<br><br>JS Function #5 - Combining Cardinal and German Numbers<br>");
    for (let i = 0; i < cardinalNumbers.length; i++) 
    {
        document.writeln("'" + cardinalNumbers[i] + " is " + germanNumbers[i] + "'");
    }
}
// Call the function
cardinalAndGerman();
// End of cardinalAndGerman


/*
    Function #6:
        Write code that returns an array of ONLY prime numbers that are in the array numbers
*/
function returnPrimeNumbers()
{
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    numbers = numbers.filter((number) => 
    {
        // The typical formula for finding prime numbers
        for (let i = 2; i <= Math.sqrt(number); i++) 
        {
            if (number % i === 0) 
            {
                return false;
            }
        }
            return number > 1;
    });
    document.writeln("<br><br>JS Function #6 - List ONLY The Prime Numbers From A Given Array<br>");
    document.writeln(numbers.join(", "));
}
// Call the function
returnPrimeNumbers();
// End of returnPrimeNumbers


/*
    Function #7:
    Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, 
    log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". 
    For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
*/
function displayOutput()
{
    document.writeln("<br><br>JS Function #7 - Display the Desired Output");
    for (let i = 1; i <= 100; i++) 
    {
        document.writeln("<br>");
        // Setting an empty string for the sentence which will replace certain numbers
        let replaceNumbers = "";
        // If the number is a multiple of 3 AND 5, do the following
        if ((i % 3 === 0) && (i % 5 === 0)) 
        {
            replaceNumbers += "CSC225 RULES I LOVE JAVASCRIPT";
        }
        // Else, if the number is only a multiple of 3, do the following
        else if (i % 3 === 0) 
        {
            replaceNumbers += "CSC225 RULES";
        }
        // Else, if the number is only a multiple of 5, do the following
        else if (i % 5 === 0) 
        {
            replaceNumbers += "I LOVE JAVASCRIPT";
        }
        // "||" in JS is the logical "OR", meaning, output the special sentence or output the number instead
        document.writeln(replaceNumbers || i);
    }
}
// Call the function
displayOutput();
// End of displayOutput