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

    var numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
    var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var specialCharactersArray = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","]","|","{","}",";",":","'",",",".","/","<",">","?"]

    var passwordOptions = []

    if (numbersPromt === true) {
      passwordOptions.push(numbersArray)
    }

    if (lowercasePromt === true) {
      passwordOptions.push(lowercaseArray)
    }

    if (uppercasePromt === true) {
      passwordOptions.push(uppercaseArray)
    }
    
    if (specialCharactersPromt === true) {
      passwordOptions.push(specialCharactersArray)
    }

    console.log(passwordOptions);


    
    
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
