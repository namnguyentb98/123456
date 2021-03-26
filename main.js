function call() {
    let sum = 0;
    let num1 = 0, num2 = 1;
    let count = document.querySelector("input").value;
    for (let i = 0; i < count; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    document.querySelector("#output").innerHTML = sum;
}

function addNote() {
    
    let note = document.querySelector("input").value;
    let numberItem = document.querySelectorAll("li").length;
    document.querySelector("ul").innerHTML += ('<li><button onclick="done(' + numberItem+ ')">Done</button>' + note + '</li>');
}

function done(numberItem) {
    let item = document.querySelectorAll("li")[numberItem];
    item.children[0].remove();
    let text = item.innerHTML;
    item.innerHTML = "<del>" + text + "</del>";
}