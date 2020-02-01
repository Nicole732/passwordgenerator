//Script for code generator
    



// WHEN I click the button to generate a password
// with id butGen, I launch the function secPassword()

function secPassWord () {

    //GIVEN I need a new, secure password       

    //Declare empty array SecPass to store Secure Password

    var SecPass = [];

    // THEN I am presented with a series of prompts for password criteria
    // WHEN prompted for password criteria
    alert("Input Password Criteria");

    // THEN I select which criteria to include in the password
    // WHEN prompted for the length of the password
    // The function getPassLength is called
    
    function getPassLength() {
        // THEN I choose a length of at least 8 characters and no more than 128 characters
        var secPassLength = prompt("Input Password length. It should be a number between 8 and 128");
        // console.log(secPassLength);
        // I check to make sure that input meets criteria
        if (secPassLength < 8 || secPassLength > 128) {
            alert("The length should be between 8 and 128");
            secPassLength = prompt("Input Password length. It should be a number between 8 and 128");
        }
        return secPassLength;
        //console.log(getPassLength());
    }
    // Each further prompt returns a variable charType
    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
    // each of these types is excecuted through functions getCharType
    // They return a character of the specified type

    secPass.length = getPassLength();
    
    // for (i=0; i< sec.Pass.Length, i++) ********
    // repeat each step below
    // store result in array or just display???


    //function to generate a lowercase character 

    var charLowerCase = confirm("Do you want to include lowercase characters in your password?");
    
    if (charLowerCase) {
        //generates random lowercase as the first input to secPass array
        function genLowerCase() {
            var result  = '';
            var characters1 = 'abcdefghijklmnopqrstuvwxyz'; //check JS syntax vars
            for ( var i = 0; i < characters1.length; i++ ) {
                result = characters1.charAt(Math.floor(Math.random() * characters1.length));
            }
            return result; // fill this at secPass index i?? ****
        }
        //console.log(genLowerCase());*******
        //a lower case is written in secPas[i]
    }
    

    //function to input random uppercase
    var charUpperCase = confirm("Do you want to include uppercases characters in your password?");
    
    if (charUpperCase) {
        //generates random lowercase as the first input to secPass array
        function genUpperCase() {
            var result  = '';
            var characters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZz';
            for ( var i = 0; i < characters2.length; i++ ) {
                result = characters2.charAt(Math.floor(Math.random() * characters2.length));
            }
            return result;
        }
        //console.log(genUpperCase());
        //to have a lower case letter, call genLowerCase()
    }
    

    
//// restart testing from here ********

// function to include a special character
var charSpecial = confirm("Do you want to include special characters in your password?");
    
if (charSpecial) {
    //generates random lowercase as the first input to secPass array
    function genSpecialChar() {
        var result  = '';
        var characters3 = //' !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~';  
        for ( var i = 0; i < characters3.length; i++ ) {
            result = characters3.charAt(Math.floor(Math.random() * characters3.length));
        }
        return result;
    }
    console.log(genSpecialChar());
    //to have a lower case letter, call genLowerCase()
}

//function to include a random number

var charNumber = confirm("Do you want to include a number in your password?");

if (charSpecial) {
    //generates random lowercase as the first input to secPass array
    function genNumber() {
        var result  = '';
        var characters4 = '0123456789'  
        for ( var i = 0; i < characters4.length; i++ ) {
            result = characters4.charAt(Math.floor(Math.random() * characters4.length));
        }
        return result;
    }
    console.log(genNumber());
    //to have a lower case letter, call genLowerCase()
}







    // THEN a password is generated that matches the selected criteria
    // fills the array secPass
    // 

    // WHEN the password is generated
    
    // THEN the password is either displayed in an alert or written to the page

// the function secPassWord writes entries of secPass array in HTML doc p with id secPassDisplay 
// Used to output the secured password

// check getRandomValues to print random values of an array content

// simply print the array??

function secPassWrite() {   

    for (i = 0; i < secPass.length; i++) {

        document.getElementById("secPassDisplay").innerHTML += SecPass[i];
    } 
    
}
    