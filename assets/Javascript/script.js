// Assignment code here
function generatePassword() {
  // these variables reference password requirments 
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowercaseletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

// section of different prompts that user interacts with 

// number of characters prompt that gives user option to determine how many characters they want in their password that meets specified criteria 
  numberofCharacters = prompt("How long do you want your password to be? Password length must at least be 8 characters and no more than 128 characters");
  if (numberofCharacters < 8 || numberofCharacters > 128) {
    return "The amount of characters you enter is not valid; please try again. Hint: password length must at least be 8 characters and no more than 128 characters";
  } else if (isNaN(numberofCharacters)) {
    numberofCharacters = prompt("This is not a valid input. Please try again.");
  }


  // include numbers prompt to give user option to include numbers in their password
  includeNumbers = confirm("Do you want to include numbers in your password?");
  if (includeNumbers) {
    alert("Your password will include numbers.");
  }
  else {
    alert("Your password will NOT include numbers.");
  }

  // include lowercase letters prompt to give user option to include lowercase letters in their password
  includeLowercase = confirm("Do you want to include lowercase letters in your password?");
  if (includeLowercase) {
    alert("Your password will include lowercase letters.");
  }
  else {
    alert("Your password will NOT include lowercase letters.");
  }

  // include uppercase letters prompt to give user option to include uppercase letters in their password
  includeUppercase = confirm("Do you want to include uppercase letters in your password?");
  if (includeUppercase) {
    alert("Your password will include uppercase letters.");
  }
  else {
    alert("Your password will NOT include uppercase letters.");
  }

  // include special characters prompt to give user option to include special characters in their password
  includeSpecialcharacters = confirm("Do you want to include special characters in your password?");
  if (includeSpecialcharacters) {
    alert("Your password will include special characters.");
  }
  else {
    alert("Your password will NOT include special characters.");
  }

   // prompt user an error message if user has not selected 
   if (includeNumbers === false && includeLowercase === false && includeUppercase === false && includeSpecialcharacters === false) {
    return "You have not selected any character type, please try again."
  }

  // program conditional statement that links function to determine password based on user input
  if (includeNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (includeLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseletters);
  }
  if (includeUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseletters);
  }
  if (includeSpecialcharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
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