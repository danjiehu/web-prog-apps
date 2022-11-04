// console.log("hello");

let arr = [];
let demoComments = document.getElementsByName("demo");

console.log(document.getElementsByName("demo"));
arr = Array.from(demoComments);
console.log(arr);

// creating new post html function
function createCard(handle, comment) {

    let shtml = '<div class="col-md-6 col-lg-4" name="demo">';
    shtml += '<div class="p-2">';
    shtml += '<div class="card">';
    shtml += '<div class="card-body">';
    shtml += '<h6 class="card-subtitle mb-2 text-muted">' + handle + '</h6>';
    shtml += '<p class="card-text">' + comment + '</p>';
    shtml += '</div>' + '</div>' + '</div>' + '</div>';

    let node = new DOMParser().parseFromString(shtml, 'text/html');
    return node.body.childNodes[0];
}

// post function
function post() {
    // console.log(handle.value);
    // console.log(comment.value);

    if (Comment.value == "hacker") {
        // do nothing
    } else {
        let newCard = createCard(handle.value, comment.value);
        // arr.unshift(newCard);
        // console.log(arr);
        let cardContainer = document.getElementById("card-container");
        cardContainer.prepend(newCard);
    }
}
