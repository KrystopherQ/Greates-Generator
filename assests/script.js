// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var upperLetters = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
var numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
var symbols = ("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "?", "/", "<", ">", ",", ".", "[", "]", "|", "~", "'");
var passwordLength;
var upperCheck;
var numbersCheck;
var specialCheck;
var passwordLength;
// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}



function generatePassword(){
    passwordLength = prompt("How many characters would you like your password to be (between 8-128 characters:");
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
    upperCheck = prompt("Do you want uppercase letters in your password? yes or no ");
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



  function specialChar() {
    specialCheck = prompt("Do you want numbers in your password? yes or no");
      specialCheck  = specialCheck.toLowerCase();
    if (specialCheck === null || specialCheck === ""){
      alert("Please answer yes or no");
      specialChar();
    } else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;
    } else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    } else {
      alert("Please answer Yes or No");
      specialChar();
    }
    return specialCheck;
  }  
  

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);