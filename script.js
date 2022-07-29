// Assignment code here
function generatePassword() {

  var userInput = window.prompt("How long do you want your password? (8 - 128 characters)");

  var passwordLength = parseInt(userInput)
    // password number validation
    if (isNaN(passwordLength)) {
      window.alert("Please enter a number.")
      return
    } if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password must be between 8 and 128 characters.")
      return
    } 
    // else {
    //   window.alert(`Thank You! Your password will contain ${userInput} characters.`)
    //   return
    // }
  
    var numbersPromt = window.confirm("Do you want numbers in the password?")
    var lowercasePromt = window.confirm("Do you want lowercase letters in the password?")
    var uppercasePromt = window.confirm("Do you want uppercase letters in the password?")
    var specialCharactersPromt = window.confirm("Do you want special characters in the password?")


 
 


    
    
  // prompt user questions
    // pwd length 8 - 128 characters
      // which special characters to inluce

  // validate input
  // generate password
  // display pasword on page


  


  return "generated password here"
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
