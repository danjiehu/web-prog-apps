const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp();

//Post Comments Server Side. From slide 20.

//when we receive a request from the client,
exports.postcomments = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        //add the body of the request to the 'comments' folder in the database
        admin.firestore().collection('comments').add(request.body).then(()=> {
            response.send("Saved in the database");
        });
    });
});
//request.body is the object sent from client with send(). request.query is the information sent from client in the url like:
//let url = "https://us-central1-example1-87462.cloudfunctions.net/postcomments" + "?id=" + id + "&myVar=" + myVar;
//request.query.myVar is the value sent.



// Get Comments Server Side. from slide 16.

exports.getcomments = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        let myData = []
        return admin.firestore().collection('comments').get().then(
            (snapshot) => {
                snapshot.forEach(
                    (doc) => {
                        myData.push(doc.data());
                    });
                response.send(myData);
            })
    })
});