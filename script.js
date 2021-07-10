// Assignment Code - searches the html for ID generate and ties variable to it
var generateBtn = document.querySelector("#generate");

// Global strings for character options
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerals = "0123456789";
const specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate the password (main function)
function generatePassword() {
  let passwordLength = getLength();
  let characterRules = getRules();
  let lowerCase = characterRules.lowerCase,
      upperCase = characterRules.upperCase,
      numeric = characterRules.numeric,
      special = characterRules.special;
  let options = "";
  let newPass = "";
    // Combine acceptable characters into a single string
  if (lowerCase) {
    options = lowerAlpha;
  }
  if (upperCase) {
    options = options.concat(upperAlpha);
  }
  if (numeric) {
    options = options.concat(numerals);
  }
  if (special) {
    options = options.concat(specials);
  }
    // Create password string using random character selection from the options string created
  for (let i = 0; i < passwordLength; i++) {
    let randomCharacter = options[Math.floor(Math.random()*options.length)];
    newPass = newPass.concat(randomCharacter);   
  }
  return newPass
}

// Gather user input for length of password
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

// Gather password criteria
function getRules() {
  const lowerPrompt = "Would you like to include lower case letters?";
  const upperPrompt = "Would you like to include upper case letters?";
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


