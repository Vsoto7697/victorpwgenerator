// Assignment code here
function generatePassword() {
// in order to generate password, must include special characters"
var specialcharacters= [' ', '!', '"', '#', '$', '%', '&', "'",'(', ')', '*', '+',',', '-', '.', '/', ':', ';', '<', '=', '<', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"' ] ;

// in order to generate password, must include lowercase letter"
var lowercaseletters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// in order to generate password, must include uppercase letters"
var uppercaseletters= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// in order to generate password, must include numbers"
var numbers= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

console.log(specialcharacters,lowercaseletters,uppercaseletters,numbers)

var generateBtn = document.querySelector("generate")
while (true) {
// give user the option on how many characters they want in their password"
var userinput= window.prompt("Hello... How long do you want your password to be?")
// return all null responses so that prompts don't keep popping up"
if (userinput === null) {
return
}
var passwordLength =parseInt (userinput)

// break all invalid password lengths"
if (isNaN(passwordLength)) {
window.alert("Please try again, the input you entered is not a number!")
} else if (passwordLength < 8 || passwordLength > 128) {
window.alert ("Please try again, the password length you entered must be between 8 and 128 characters")
} else {
break
}
}

// give user the option to include either special characters, numbers, uppercase, and lower case letters"
var userwantsspecialcharacters = window.confirm("Do You want to include symbols in your password?")
var userwantslowercaseletters = window.confirm("Do You want to include lowercase letters in your password?")
var userwantsuppercaseletters = window.confirm("Do You want to include uppercase letters in your password?")
var userwantsnumbers = window.confirm("Do You want to include numbers in your password?")
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
