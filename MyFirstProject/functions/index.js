// week 8: NodeJS, APIs and Firebase Functions
// deploying only functions: firebase deploy --only functions

const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase Danjie!");
});

exports.loggedIn = functions.https.onRequest((request, response) => {
    functions.logger.info("Is user logged in?", { structuredData: true });
    response.send("Not logged in");
});


// passing data
// http:// www.mywebsite.com?data=hello
// Write a function that assumes the data passed in
// the via the Query String is a number, take the value
// that is submitted per request, double it and then
// return it via the response.
exports.number = functions.https.onRequest((request, response) => {
    functions.logger.info("Is user logged in?", { structuredData: true });
    let number = request.query.num;

    if (isNaN(number)) {
        response.send("Please enter a number")
    } else {
        console.log("Number passed in: " + number);
        number = number * 2;
        response.send("Number doubled: " + number);
    }
});
// using it: // https://us-central1-vigilant-router-362509.cloudfunctions.net/number?num=4

// http GET and POST 
// Create a function which accepts comment
// information (JSON formatted) in the body of the
// request i.e. {“Comment”: “This is my comment”}
// Make a request via Postman to send the data via a
// POST request
// Respond with a message saying “I received your
// comment, thank you”.
// KEY: learn how to test and read post requests from postman
exports.postcomment = functions.https.onRequest((request, response) => {
    response.send("message received");
});