// Assignment Code - searches the html for ID generate and ties variable to it
var generateBtn = document.querySelector("#generate");

// Global arrays
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerals = "0123456789";
const specials = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passwordLength = getLength();
  let characterRules = getRules();
  let lowerCase = characterRules.lowerCase,
      upperCase = characterRules.upperCase,
      numeric = characterRules.numeric,
      special = characterRules.special;
  if (lowerCase && upperCase && numeric && special) {
    let options = lowerAlpha.concat(upperAlpha, numerals, specials); 
  } else if (lowerCase && upperCase && numeric && !special) {
    let options = lowerAlpha.concat(upperAlpha, numerals);
  } else if (lowerCase && upperCase)

  for (let i = 0; i < passwordLength; i++) {
    
    
  }
  return newPassword;
}

function getLength() {
  const lengthPrompt = "How many characters would you like (Minimum of 8, Maximimum of 128)";
  let length = window.prompt(lengthPrompt);
  if (!length) {
    return;
  }
  if ((8 <= length) && (length <= 128)) {
    return length;
  }
  else {
    while ((length > 128) || (length < 8)) {
      window.alert("Invalid entry. Please try again (Minimum 8, Maximum 128)");
      length = window.prompt(lengthPrompt);
    }
    return length;
  }
}

function getRules() {
  const lowerPrompt = "Would you like to include lower case letters?";
  const upperPrompt = "Would you liek to include upper case letters?";
  const numericPrompt = "Would you like to include numeric values?";
  const specialPrompt = "Would you like to include special characters?";
  let lowerCase = window.confirm(lowerPrompt);
  let upperCase = window.confirm(upperPrompt);
  let numeric = window.confirm(numericPrompt);
  let special = window.confirm(specialPrompt);
  if (lowerCase || upperCase || numeric || special) {
    return {
      lowerCase,
      upperCase, 
      numeric,
      special
    }
  } else {
    while (!lowerCase && !upperCase && !numeric && !special) {
      window.alert("You must select at least one character type. Please select again!");
      lowerCase = window.confirm(lowerPrompt);
      upperCase = window.confirm(upperPrompt);
      numeric = window.confirm(numericPrompt);
      special = window.confirm(specialPrompt);
    }
    return {
      lowerCase,
      upperCase, 
      numeric,
      special
    }
  }
}


// Add event listener to generate button - when clicked, writePassword is called.
generateBtn.addEventListener("click", writePassword);




// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// -> Generate random password based on inputs that are allowed

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// -> Pass to the page to be written in the box using provided function