
// Assignment Code

//Handles interaction with HTML document
// Start the process with click on button with id generate

var generateBtn = document.querySelector("#generate");

//generateBtn.addEventListener("click", generatePassword());
//var preventlink =


// Write password to the #password input
function writePassword() {
   // generateBtn.preventDefault();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  };

  generateBtn.addEventListener("click", writePassword);
 







// Start the process to generate password with function generatePassword 
// check if users entry is valid
// ask user for each character option
//pull entries from character arrays based on users selction
// pushes  it bases on user's selected criteria, concatenated entries
// stores in options array 
//makes a random selection in temporal option array and pushes to final password

function generatePassword(){

    var charactersN = ["0","1", "2", "3", "4", "5", "6","7", "8", "9"];
    var charactersl = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
    var charactersU= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var charactersS = ["!", "#", "$", "%", "&", "'", "(", ")", ",", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=>", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", ";"];
    var genLowerCase;
    var genUpperCase;
    var genSpecialChar;
    var options;
    var password = [];
    


    //request user input on password length. use passeInt to return a number
    
    var secPassLength = parseInt(prompt("Input Password length. It should be a number between 8 and 128"));
    console.log("Your password length  is: " + secPassLength);
    // check various criteria
    if (secPassLength) {
        // secPasslength is valid
        // if it is in the range
        if (secPassLength >=8 && secPassLength <= 128){
            genLowerCase = confirm("Do you want to include lower cases?");
            genUpperCase= confirm("Do you want to include upper cases?");
            genSpecialChar = confirm("Do you want to include special characters?");
            genNumber =  confirm("Do you want to include numbers?");

            console.log(genLowerCase, genUpperCase, genSpecialChar,genNumber );
            // consider the negative cases
            // no choices
            if (!genLowerCase && !genUpperCase && !genSpecialChar && !genNumber){
                    options = alert ("Please make a choice! Start All over.");
                    //return
                    
            } 
            //all choices. concatenates entries of corresponding arrays
            else if (genLowerCase && genUpperCase && genSpecialChar && genNumber){
                
                options = charactersl.concat(charactersl, charactersS, charactersN);
            }
            // if 3 options - no number
            else if (genLowerCase && genUpperCase && genSpecialChar) {
                
                options = charactersl.concat(charactersU, charactersS);
            }
             // if 3 options - no special char
            else if (genLowerCase && genUpperCase && genNumber) {
                
                options = charactersl.concat(chartersU, charactersN);

            }
            //if 3 options - no upper case
            else if (genLowerCase && genSpecialChar && genNumber) {
                
                options = charactersl.concat(charactersS, charactersN);

            }
             //if 2 options - lower case and special character
             else if (genLowerCase && genSpecialChar) {
                
                options = charactersl.concat(charactersS);

            }
            //if 2 options - lower and upper
            else if (genLowerCase && genUpperCase){
                
                options = charactersl.concat(charactersU);

            }
            //if 2 options - lower and number
            else if (genLowerCase && genNumber){
                
                options = charactersl.concat(charactersN);

            }

            //if 2 options  -lower and special
            else if (genLowerCase && genSpecialChar) {
                
                options = charactersl.concat(charactersS);

            }
            // 1 option - lower
            else if (genLowerCase) {

                options = charactersl;
            }
             // 1 option - Upper
             else if (genUpperCase) {

            options = charactersU;
            }
             // 1 option - Special
             else if (genSpecialChar) {

            options = charactersS;
            }
            // 1 option - Number
            else if (genNum){

            options = charactersU;
            };
            // secPass array hold generated password
            var password = [];
            // //random selection of variables and pushes it in password
            for ( var i=0; i < secPassLength; i++) {

               var getOptions = options[Math.floor(Math.random() * options.length)];

               password.push(getOptions);
            }
            
            // join creates and returns the concatenate password

            var result = password.join("");

            return result;

        } else {
            console.log("wrong range")
            alert("Please enter a number in the correct range");
            console.log("The length is not within range");
        }
        // end validation within rigth range
    } else {
        // no entry for secPassLenght;
        alert("The length is required")
        console.log("The length is required")
        
        return;
    }

};
console.log(generatePassword());


//Handles interaction with HTML document
// Start the process with click on button with id generate

//DOM
// var generateBtn = document.querySelector("#generate");


// generateBtn.addEventListener("click", function(e){
//     e.preventDefault();
//     //generatePassword();
//     var GeneratedPassword = generatePassword();
//     document.getElementById("password").placeholder =  GeneratedPassword;
   
// });










  


    







