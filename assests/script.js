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
    }



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);