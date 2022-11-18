function getComments() {
    let xhr = new XMLHttpRequest();
    let url = 'https://us-central1-example1-87462.cloudfunctions.net/getcomments';  // Put your own url in here from the functions section on the firebase website
    xhr.open('GET', url);

    // What to do when the server eventually replies:
    xhr.onreadystatechange = function () {
        let DONE = 4;
        let OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                let sHTML = "";
                let data = JSON.parse(xhr.responseText);
                for (let i = 0; i < data.length; i++) {
                    sHTML += "<p> Handle: " + data[i].handle + "</p>";
                    sHTML += "<p> Comment: " + data[i].comment + "</p>";
                    comments.innerHTML = sHTML;
                }
            } else {
                console.log('Error: ' + xhr.status);
            }
        }
    };

    // Send off the request to the server. The section above will run when the server replies.
    xhr.send(null);
}
Footer
