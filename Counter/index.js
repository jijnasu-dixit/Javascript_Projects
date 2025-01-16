let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment(){
    console.log("At increment")
    count += 1;
    countEl.textContent = count;
}

function save(){
    console.log("At save")
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = count = 0
}

function reset(){
    console.log("Cleared")
    countEl.textContent = 0
    count = 0
    saveEl.textContent = "Previous entries: "
}


// increment()
// increment()
// save()
// clear()
// increment()
