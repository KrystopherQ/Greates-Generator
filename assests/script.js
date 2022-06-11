// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters ="abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var upperCheck;
var numbersCheck;
var symbolCheck;
var passwordLength;

function writePassword() {
    var password = createPassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


function generatePassword() {
  passwordLength = prompt("How many characters would you like your password to be between 8-128 characters:");
  if (passwordLength < 8) {
    alert("Password length must be a number between 8-128 characters" );
    generatePassword();
  } else if (passwordLength > 128) {
    alert("Password length must be a number between 8-128 characters" );
    generatePassword();
  } else if (isNaN(passwordLength)) {
    alert("Password length must be a number between 8-128 characters" );
    generatePassword();
  } 
  return passwordLength;
}



function genPass() {
  upperCheck = prompt("Do you want uppercase letters in your password? yes or no");
    upperCheck = upperCheck.toLowerCase();
  if (upperCheck === null || upperCheck === "") {
    alert("Please answer yes or no");
    genPass();
  } else if (upperCheck === "yes" || upperCheck ==="y") {
    upperCheck = true;
    return upperCheck;
  } else if (upperCheck === "no" || upperCheck ==="n") {
    upperCheck = false;
    return upperCheck;
  } else {
    alert("Please answer yes or no");
    genPass();
  }
  return upperCheck;
}



function num() {
  numbersCheck = prompt("Do you want numbers in your password? yes or no");
    numbersCheck  = numbersCheck.toLowerCase();
  if (numbersCheck === null || numbersCheck === "") {
    alert("Please answer yes or no");
    num();
  } else if (numbersCheck === "yes" || numbersCheck ==="y") {
    numbersCheck = true;
    return numbersCheck;
  } else if (numbersCheck === "no" || numbersCheck ==="n") {
    numbersCheck = false;
    return numbersCheck;
  } else {
    alert("Please answer yes or no");
    num();
  }
  return numbersCheck;
}



function symbol() {
  symbolCheck = prompt("Do you want numbers in your password? yes or no");
    symbolCheck  = symbolCheck.toLowerCase();
  if (symbolCheck === null || symbolCheck === ""){
    alert("Please answer yes or no");
    symbol();
  } else if (symbolCheck === "yes" || symbolCheck ==="y"){
    symbolCheck = true;
    return symbolCheck;
  } else if (symbolCheck === "no" || symbolCheck ==="n"){
    symbolCheck = false;
    return symbolCheck;
  } else {
    alert("Please answer yes or no");
    symbol();
  }
  return symbolCheck;
}  



function createPassword() {
  generatePassword();
  genPass();
  num();
  symbol();

  var characters = lowerLetters;
  var password = "";
  if (upperCheck && numbersCheck & symbolCheck) {
    characters += upperLetters + numbers + symbols;
  } else if (upperCheck && numbersCheck) {
    characters += upperLetters + numbers;
  } else if (numbersCheck && symbolCheck) {
    characters += numbers + symbols;
  } else if (upperCheck && symbolCheck) {
    characters += upperLetters + symbols;
  } else if (upperCheck) {
    characters += upperLetters;
  } else if(numbersCheck) {
    characters += numbers;
  } else if (symbolCheck) {
    characters += symbols;
  } else {
    characters === lowerLetters;
  }
  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length)); // random number to be generated
  }
  return password;
}


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);