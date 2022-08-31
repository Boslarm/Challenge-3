// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;

}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







function generatePassword() {
  var upperCharacters = "";
  var completedPassword = 'password';
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//   series of prompts
//   ask if they want uppercase
var wantUpper = confirm("Would you like to include Uppercase Characters in your password?")
//   ask if they want lowercase
//   ask if they want special chracters
//   ask if they want numerics
console.log(wantUpper);

// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters
var desiredPasswordLength = prompt("How long would you like your password to be? Must be netween 8-128 characterrs.");
if ((parseInt(desiredPasswordLength) >= 80) && (parseInt(desiredPasswordLength) <= 128)) {

  if (wantUpper) {
    upperCharacters = password + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected
// all prompts answered verify and at least one chareacter type be selected
// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria
      // reurns completed password
  return completedPassword;

} else {
  alert("The length of your password needs to be between 8-128 characters.");
  return "";
  // generatePassword();
  // return;
}
}