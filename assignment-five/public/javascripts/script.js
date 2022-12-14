// console.log("hello");

emptyFieldCheck();

let arr = []; // not used 
let demoComments = document.getElementsByName("demo");

console.log(document.getElementsByName("demo"));
arr = Array.from(demoComments);
console.log(arr);

function emptyFieldCheck() {
    if (!handle.value) {
        postbtn.disabled = true;
    }
    if (!comment.value) {
        postbtn.disabled = true;
    }
    if (handle.value && comment.value) {
        postbtn.disabled = false;
    }
};

// creating new post html function
function createCard(handle, comment, id) {

    let shtml = '<div class="col-md-6 col-lg-4" name="demo">';
    shtml += '<div class="p-2">';
    shtml += '<div class="card">';
    shtml += '<div class="card-body">';
    shtml += '<h6 class="card-subtitle mb-2 text-muted">' + handle + '</h6>';
    shtml += '<p class="card-text">' + comment + '</p>';
    shtml += `<button type="button" class="btn btn-danger btn-sm" id=${id} onClick="deleteComment(this.id)">delete</button>`;
    shtml += '</div>' + '</div>' + '</div>' + '</div>';

    let node = new DOMParser().parseFromString(shtml, 'text/html');
    return node.body.childNodes[0];
}

// post function - no longer in use
// function post() {
//     // console.log(handle.value);
//     // console.log(comment.value);

//     if (handle.value == "hacker") {
//         handle.value = null;
//         comment.value = null;
//         console.log("hacker post forbidden");
//         alert("hacker post forbidden");
//     } else {
//         let newCard = createCard(handle.value, comment.value);

//         arr.unshift(newCard); // not used
//         console.log(arr); // not used

//         let cardContainer = document.getElementById("card-container");
//         cardContainer.prepend(newCard);
//         handle.value = null;
//         comment.value = null;
//     }
// }

function refreshCount() {
    console.log("refreshCount() invoked");
    let text = comment.value;
    let currCount = text.trim().replace(/ /g, '').length;
    let remainingCount = 280 - currCount;
    counter.innerHTML = remainingCount;
    if (remainingCount <= 0) {
        postbtn.disabled = true;
        counter.style.display = "none";
        usermsg.innerHTML = "exceeded maximum length allowed";
        usermsg.style.color = "#ee4e50";
        usermsg.style.fontWeight = "400";
    }
    if (remainingCount > 0) {
        postbtn.disabled = false;
        counter.style.display = "inline";
        usermsg.innerHTML = "character remaining...";
        usermsg.style.color = "#91979d";
        usermsg.style.fontWeight = "200";
    }
}

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
                handle.readOnly = false;
                comment.readOnly = false;
                handle.value = null; // clearing input for next comment
                comment.value = null; // clearing input for next comment
                window.location.reload(); // refresh page
            } else {
                console.log("error: ", xhr.status);

            } // end of xhr status check
        } // end of xhr ready state check
    } // end of readystatechange

    console.log(JSON.stringify({ "handle": handle.value, "comment": comment.value }));
    xhr.send(JSON.stringify({ "handle": handle.value, "comment": comment.value }));
    handle.readOnly = true;
    comment.readOnly = true;
    postbtn.disabled = true;

} // end of postComment()

// client JS function 2: getComments()
function getComments() {

    console.log("invoking getComments()");

    let xhr = new XMLHttpRequest();
    let url = "https://us-central1-assignment-five-3959f.cloudfunctions.net/displayComments";
    xhr.open('GET', url);

    xhr.onreadystatechange = function () {
        let DONE = 4;
        let OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                let commentArr = JSON.parse(xhr.responseText);
                console.log("json response: ", commentArr);
                commentArr.forEach(element => {
                    let newCard = createCard(element.handle, element.comment, element.id);
                    let cardContainer = document.getElementById("card-container");
                    cardContainer.prepend(newCard);
                });
            } else {
                console.log("error: ", xhr.status);
            }
        }
    }

    xhr.send(null); // ! do not forget
}


// client JS functon 3: deleteComment()
function deleteComment(id) {
    console.log("deleteComment() invoked");
    // console.log("id.disabled: ", id.disabled);
    document.getElementById(id).disabled = true;

    let xhr = new XMLHttpRequest();
    let url = "https://us-central1-assignment-five-3959f.cloudfunctions.net/deleteComment" + "?id=" + id;

    xhr.open("DELETE", url);

    xhr.onreadystatechange = function () {
        let DONE = 4;
        let OK = 200;
        if (xhr.readyState === DONE) {
            // if comment deleted successfully refresh page
            if (xhr.status === OK) {
                console.log(xhr.responseText);
                window.location.reload();
            }
        } else {
            console.log("delete error: " + xhr.status);
        }
    }
    xhr.send(null);
}