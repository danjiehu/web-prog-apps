// client JS function 1: postComment()
function postComment() {

    let xhr = new XMLHttpRequest();
    let url = "https://us-central1-assignment-five-3959f.cloudfunctions.net/storeComments";
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = function () {
        let DONE = 4;
        let OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                postbtn.disabled = false;
                handle.value = null; // clearing input for next comment
                comment.value = null; // clearing input for next comment
                // getComments();
            } else {
                console.log("error: ", xhr.status);

            } // end of xhr status check
        } // end of xhr ready state check
    } // end of readystatechange

    console.log(JSON.stringify({ "handle": handle.value, "comment": comment.value }));
    xhr.send(JSON.stringify({ "handle": handle.value, "comment": comment.value }));
    postbtn.disabled = true;

} // end of postComment()

// client JS function 2: getComments()


// client JS functon 3: deleteComment()
