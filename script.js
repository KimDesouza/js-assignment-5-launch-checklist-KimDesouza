// Write your JavaScript code here!





window.addEventListener("load", function() {

   let listedPlanets;
    let listedPlanetsResponse = myFetch();
     listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
        console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
        let x = pickPlanet(listedPlanets);
        addDestinationInfo(document, x.name, x.diameter, x.star, x.distance, x.moons, x.image);
    })
   
   let form = document.querySelector("form");
   let list = document.getElementById('faultyItems');
   list.style.visibility = "hidden";
   form.addEventListener("submit", function(event) {
    
    event.preventDefault();
    let pilotInput = document.querySelector("input[name = pilotName]");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name = copilotName]");
    let copilot = copilotInput.value;
    let fuelInput = document.querySelector("input[name = fuelLevel]");
    let fuelLevel = Number(fuelInput.value);
    let cargoInput = document.querySelector("input[name = cargoMass]");
    let cargoLevel = Number(cargoInput.value);
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   });
});