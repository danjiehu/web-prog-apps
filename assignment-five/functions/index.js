const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

// cloud function 1: storeComments
exports.storeComments = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        // function body here - use the provided req and res from cors

        // creating a timestamp and add to document
        const currentTime = admin.firestore.Timestamp.now();
        request.body.timestamp = currentTime;

        //add the body of the request to the 'comments' collection in the database
        admin.firestore().collection("comments").add(request.body).then(() => {
            response.send("Saved in the database");
        });
    }); // end of cors
}); // end of storeComments()
// postman testing DONE

// cloud function 2: displayComments
exports.displayComments = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        // function body here - use the provided req and res from cors

        let posts = [];
        return admin.firestore().collection("comments").orderBy("timestamp").get().then(
            // order comments by latest first
            (snapshot) => {
                console.log("snapshot: ", snapshot);
                snapshot.forEach(
                    doc => {
                        posts.push(doc.data());
                    }) // end of forEach
                response.send(posts);
            } // end of snapshot
        ) // end of get().then()
    }) // end of cors
}) // end of displayComments()
// postman testing DONE

// cloud function 3: deleteComments
exports.deleteComment = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        // function body here - use the provided req and res from cors

        admin.firestore().collection("comments").doc(request.query.id).delete().then(function () {
            response.send("Document successfully deleted!");
        })
    });
});
// ! request.query.something
// is the information send from client in the xhr url after question mark like
// let url = "https://myapp.net/postComments" + "?id=" + idValue + "&myVar=" + myVarValue;
// request.query.id gives idValue and request.query.myVar gives myVarValue
// postman testing DONE