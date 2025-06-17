 // Import the Express.js library
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Initialize an array to store login details
let loginDetails = [];

// Define the root route to send a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string
app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details
app.post("/login/:name", (req, res) => {
    loginDetails.push({ "name": req.params.name, "login_time": new Date() });
    res.send(req.params.name + ", You are logged in!");
});
app.get("/fetchMonth/:number", (req, res) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const monthIndex = parseInt(req.params.number) - 1; // Convert to zero-based index
    if (monthIndex >= 0 && monthIndex < monthNames.length) {
        res.send(monthNames[monthIndex]);
    } else {
        res.status(400).send("Invalid month number. Please provide a number between 1 and 12.");
    }
}
);  
// Define a route to handle logout requests
app.post("/logout/:name", (req, res) => {
    const name = req.params.name;
    loginDetails = loginDetails.filter(detail => detail.name !== name);
    res.send(name + ", You are logged out!");
});
// Define a route to fetch the current date and time
app.get("/currentDateTime", (req, res) => {
    const currentDateTime = new Date();
    res.send(currentDateTime.toString());
});     
// Define a route to fetch the current date 
app.get("/currentDate", (req, res) => {
    const currentDate = new Date();
    res.send(currentDate.toDateString());
});
// Define a route to fetch the current time
app.get("/currentTime", (req, res) => {
    const currentTime = new Date();
    res.send(currentTime.toTimeString());
});
// Define a route to fetch the current year
app.get("/currentYear", (req, res) => {
    const currentYear = new Date().getFullYear();
    res.send(currentYear.toString());
});
// Define a route to fetch the current month
app.get("/currentMonth", (req, res) => {
    const currentMonth = new Date().getMonth() + 1; // Months are zero-based
    res.send(currentMonth.toString());
});
// Define a route to fetch the current day of the week
app.get("/currentDayOfWeek", (req, res) => {
    const currentDayOfWeek = new Date().getDay(); // 0-6 for Sunday-Saturday
    res.send(currentDayOfWeek.toString());
});
// Define a route to fetch the current hour
app.get("/currentHour", (req, res) => {
    const currentHour = new Date().getHours();
    res.send(currentHour.toString());
});
// Define a route to fetch the current minute
app.get("/currentMinute", (req, res) => {
    const currentMinute = new Date().getMinutes();
    res.send(currentMinute.toString());
});
// Define a route to fetch the current second
app.get("/currentSecond", (req, res) => {
    const currentSecond = new Date().getSeconds();
    res.send(currentSecond.toString());
});
// Define a route to fetch the current millisecond
app.get("/currentMillisecond", (req, res) => {
    const currentMillisecond = new Date().getMilliseconds();
    res.send(currentMillisecond.toString());
});
// Define a route to fetch the current timestamp
app.get("/currentTimestamp", (req, res) => {
    const currentTimestamp = Date.now();
    res.send(currentTimestamp.toString());
});
// Define a route to fetch the current UTC date and time
app.get("/currentUTCDateTime", (req, res) => {
    const currentUTCDateTime = new Date().toISOString();
    res.send(currentUTCDateTime);
});
// Define a route to fetch the current UTC date
app.get("/currentUTCDate", (req, res) => {
    const currentUTCDate = new Date().toISOString().split('T')[0]; // Get the date part
    res.send(currentUTCDate);
});

// Define a dynamic route to greet users by name
app.get("/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

// Start the server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
