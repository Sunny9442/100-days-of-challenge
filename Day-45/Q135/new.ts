// Question 135: Explain how you can format a JSON string with proper indentation for readability.

const personss ={
    name : "Sunny Shahzad",
    age : 22,
    city : "Karachi",
} 

const jsonstrings = JSON.stringify (personss , null , 2)

console.log(jsonstrings)