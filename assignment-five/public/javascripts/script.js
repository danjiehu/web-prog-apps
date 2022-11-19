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

