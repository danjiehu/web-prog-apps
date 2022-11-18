const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Firebase provides an admin library to allow your server code (functions) to run in an authenticated mode

const cors = require("cors")({ origin: true });

admin.initializeApp();
// Firebase provides an admin library to allow your server code (functions) to run in an authenticated mode


// cloud function 1: export storeComment()
exports.storeComment = functions.https.onRequest((request, response) => {
    cors((request, response) => {
        admin.firestore().collection("comments").add(request.body).then(() => {
            // request.body is the json object sent from postComment() in client side JS with xhr.send()
            response.send("saved in database");
        })
    });
});
// request.query is the information send from client in the xhr url after question mark like
// let url = "https://myapp.net/postComments" + "?id=" + idValue + "&myVar=" + myVarValue;
// request.query.id gives idValue and request.query.myVar gives myVarValue
// ! this is useful in delete request


// getComments from firestore
exports.getComments = functions.https.onRequest((request, response) => {
    cors((request, response) => {
        let myData = [];
        return admin.firestore().collection("comments").get().then(
            (snapshot) => {
                console.log("snapshot", snapshot);
                snapshot.forEach(
                    doc => {
                        myDate.push(doc.data());
                    });
                response.send(myData); // send the array back to client
            })
    })
});