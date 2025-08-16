<<<<<<< HEAD
const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;
=======
const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

function manageGarden() {
  if (temperature > 85 && timeOfDay === "morning") {
    soilMoisture += 20;
    return "Watered in the morning due to heat";
  } else if (soilMoisture < 40) {
    soilMoisture += 15;
    return "Soil was dry; watered";
  } else {
    return "No watering needed";
  }
}

if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

if (timeOfDay === "evening") {
    console.log("Lights On");
} else {
    console.log("Lights Off");
}

while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}

module.exports = { temperature, timeOfDay, soilMoisture, manageGarden };
>>>>>>> 883f953 (Initial commit with gardenManagement.js and tests)
