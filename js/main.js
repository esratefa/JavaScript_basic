/**Conditional Statement
 * if(), else if(), else()
*/

// syntax

// Grading system check

// let marks = prompt("Enter your marks:");

// if (marks >100)
// {
//     console.log("Oops!Wrong input");
// }
// else if (marks >= 90 && marks <= 100) 
// {
//     console.log("Congratulation! Your grade is Golden A+");
// }
// else if (marks >= 80 && marks <= 89) 
// {
//     console.log("Congratulation! Your grade is A+");
// }
// else if (marks >= 70 && marks <= 79) 
// {
//     console.log("Congratulation! Your grade is A");
// }
// else if (marks >= 60 && marks <= 69) 
// {
//     console.log("Congratulation! Your grade is A-");
// }
// else if (marks >= 50 && marks <= 59) 
// {
//     console.log("Congratulation! Your grade is B");
// }
// else if (marks >= 40 && marks <= 49) 
// {
//     console.log("Congratulation! Your grade is C");
// }
// else if (marks >= 33 && marks <= 39) 
// {
//     console.log("Congratulation! Your grade is D");
// }
// else if (marks >=0 && marks <=32)
// {
//     console.log("Sorry! Your grade is Fail");
// } 
// else if (marks < 0)
// {
//     console.log("Negative number not allowed");
// } 
// else
// {
//     console.log("Alert! Invalid query.");
// }


// Eligibility checking on voting


// let age = prompt("Enter Your Age:");

// if (age > 120)
// {
//     console.log ("Sorry! Not eligible for voting. ");
// }
// else if (age < 0)
// {
//     console.log ("Not even born yet!");
// }
// else if (age >= 18 && age <= 120)
// {
//     console.log ("Congratulations! You are eligible for voting.");
// }
// else 
// {
//     console.log ("Sorry! Your request does not match the standard.")
// }


// Even / Odd Number check

// let num = prompt ("Enter your number : ");

// if (num % 2 == 0) {
//     console.log ("Your given number is: Even");
// }
// else {
//     console.log ("Your given number is: Odd");
// }


// Greater / Smaller number check

// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// let num3 = prompt("Enter third number");

// if (num1 > num2)
// {
//     console.log("Your given greater number is :", num1);
// }
// else if (num1 < num3 ) 
// {
//     console.log("Your given greater number is :", num3);
// }

// else {
//     console.log("Your given greater number is :", num2);
// }

// Switch statement

let day = "Monday";

switch(day) {
    case "Staurday" : {
        console.log("Saturday is a offday");
        break;
    }
    case "Sunday" : {
        console.log("Sunday is a offday");
        break;
    }
    case "Monday" : {
        console.log("Monday is a working day");
        break;
    }
    case "Tuesday" : {
        console.log("Tuesday is a working day");
        break;
    }
    case "Wednesday" : {
        console.log("Wednesday is a working day");
        break;
    }
    case "Thursday" : {
        console.log("Thursday is a working day");
        break;   
    }
    case "Friday" : {
        console.log("Friday is a working day");
        break;
    }
    default: {
        console.log("Nothing matched");
    }
}