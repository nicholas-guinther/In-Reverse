// Get the String from the page
// Controller Function
function getString(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

// Reverse the String
// Logic Function
function reverseString(userString){
    let revString = [];

    for (let index = userString.length - 1; index >= 0; index--) {

        revString += userString[index];
    }

    return revString;
}

// Display the Reversed String
// View Function
function displayString(revString){

    // Write the message to the page
    document.getElementById("msg").innerHTML = `Your String Reversed is: ${revString}`;

    // Show the alert box
    document.getElementById("alert").classList.remove("invisible");

}

function clear(){

    document.getElementById("userString").value = "";
    document.getElementById("alert").classList.add("invisible");
}
