const express = require("express");
const app = express ();
const PORT = process.env.PORT || 3000;

// indicate that the server is running and listening on port PORT
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
})


// initialize and update the value of currentTemp on an interval
let currentTemp = 20;

function updateTemperature() {
    // replace with an API call to get the actual current temperature
    currentTemp = Math.random() * 30;
}

// update currentTemp every second
setInterval(updateTemperature, 1000)

// define the route /api/live to be a get response that returns the current time and the current temperature
app.get("/api/live", (req, res) => {
    const data = { time: Date.now(), temperature: currentTemp };
    res.json(data);
});