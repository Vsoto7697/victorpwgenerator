// Assignment code here
function generatePassword() {
  // these variables reference password requirments 
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowercaseletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

// input and prompt functions 

// number of characters prompt
  numberofCharacters = prompt("How long do you want your password to be? Password length must at least be 8 characters and no more than 128 characters");
  if (numberofCharacters < 8 || numberofCharacters > 128) {
    return "The amount of characters you enter is not valid; please try again. Hint: password length must at least be 8 characters and no more than 128 characters";
  } else if (isNaN(numberofCharacters)) {
    numberofCharacters = prompt("This is not a valid input. Please try again.");
  }
  else {
    alert("Thank you for your input, your password will be " + numberofCharacters + " characters long.");
  }

  // include numbers prompt
  includeNumbers = confirm("Do you want to include numbers in your password?");
  if (includeNumbers) {
    alert("Your password will include numbers.");
  }
  else {
    alert("Your password will NOT include numbers.");
  }

  // include lowercase letters prompt
  includeLowercase = confirm("Do you want to include lowercase letters in your password?");
  if (includeLowercase) {
    alert("Your password will include lowercase letters.");
  }
  else {
    alert("Your password will NOT include lowercase letters.");
  }

  // include uppercase letters prompt
  includeUppercase = confirm("Do you want to include uppercase letters in your password?");
  if (includeUppercase) {
    alert("Your password will include uppercase letters.");
  }
  else {
    alert("Your password will NOT include uppercase letters.");
  }


  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);