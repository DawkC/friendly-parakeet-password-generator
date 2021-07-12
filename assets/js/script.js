// Assignment Code
var generateBtn = document.querySelector("#generate")

// input arrays
var numbers = "0123456789".split("");
console.log(numbers);

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowerCase);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperCase);

var specialCharacters = "#$&@%][+-*/:><`!^$)(".split("");
console.log(specialCharacters);

function randomArrayVal(arr) {
  var randomIndex = Math.floor(Math.random * arr.length)
  return arr[randomIndex]
};

// start function to generate password
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  if(isNaN(length) === true) {
    alert("Click ok to continue.");
    return;
  }
  if(length>128) {
    alert("Less numbers please!");
    return;
  }
  if(length<8) {
    alert("More numbers please!");
    return;
  }
  var isNum = confirm("Click ok to confirm numbers.")
  if(upperCase) {
    passwordOptions = passwordOptions.concat(alphaUpper)
  }

  if(isNum === false && upperCase === false && lowerCase === false && specialCharacters ===false) {
    alert("please choose one character type");
    return;
  }

  var upperCase = confirm("Do you want to use an uppercase number?")
  var lowerCase = confirm("Do you want to use a lowercase number?")
  var specialCharacters = confirm("Do you want to use a special character?")

  var passwordOptions = {
    length,
    isNum,
    upperCase,
    lowerCase,
    specialCharacters,
  }
  return passwordOptions;
};

// Write password to the #password input
function writePassword() {
  var options = getPasswordOptions();
  console.log(options);
  var passwordArray = [];
  var results = [];
  if(options.isNum === true)
  if(options.upperCase === true)
    passwordArray = passwordArray.concat(upperCase)
  if(options.lowerCase === true)
    passwordArray = passwordArray.concat(lowerCase)
  if(options.specialCharacters === true)
    passwordArray = passwordArray.concat(specialCharacters)
  {
    passwordArray = passwordArray.concat(numbers)
  }

for(var i = 0; i < options.length; i++) {
  var index = Math.floor(Math.random() * passwordArray.length)
  var digit = passwordArray[index];
  results.push(digit)
  console.log(results)
  
}
  var password = results.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);