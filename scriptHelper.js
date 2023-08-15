// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if(isNaN(testInput) === true){
        return "Not a Number";
    } else{
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotName = document.getElementById('pilotStatus');
   let copilotName = document.getElementById('copilotStatus');
   let fuelLevel = document.getElementById('fuelStatus');
   let cargoLevel = document.getElementById('cargoStatus');
   
   //let launchStatus = document.getElementById('launchStatus');

   if ((validateInput(pilot) === "Is a Number") || (validateInput(copilot) === "Is a Number") || (validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number")){
    alert("Make sure to enter valid information for each field!");
   } else if((validateInput(pilot) === "Empty") || (validateInput(copilot) === "Empty") || (validateInput(fuelLevel) === "Empty") || (validateInput(cargoLevel) === "Empty")){
    alert("All fields are required!");
   } //else {
    //list.style.visibility = "visible";
    //pilotName.innerHTML = `1. Pilot ${pilotName.value} is ready for launch`;
    //copilotName.innerHTML = `2. Co-pilot ${copilotName.value} is ready for launch`;
    //if (fuelLevel < 10000 && cargoLevel > 10000){

    

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
