let inputTag = document.querySelector("input");
let ulList = document.querySelector("ul");
let cButton = document.querySelector(".clear");
let sButton = document.querySelector(".submit")
let liList = document.querySelectorAll("li")
let liButton = document.querySelectorAll("li button")
let delAll = document.querySelector(".deleteAll")

check();

inputTag.addEventListener("keydown", (e) => {
    let value = inputTag.value;
    if (e.key == 'Enter' && value != "") {
        if (value != "") {
            let li = document.createElement("li");
            li.innerHTML = `<div>${value}</div>
            <button class="delete">&#x2715;</button></div> `
            inputTag.value = ""
            ulList.appendChild(li);
            check();
            handleRemoval(li);
            check();
        }
    }
})

sButton.addEventListener("click", (e) => {
    if (inputTag.value != "") {
        let value = inputTag.value;
        if (value != "") {
            let li = document.createElement("li");
            li.innerHTML = `<div>${value}</div>
            <button class="delete">&#x2715;</button></div>`
            inputTag.value = ""
            ulList.appendChild(li);
            check();
            handleRemoval(li);
            check();

        }
    }
})

cButton.addEventListener("click", () => {
    inputTag.value = "";

})

delAll.addEventListener("click", () => {
    if (ulList.querySelectorAll("li").length > 0) {
        let e = document.querySelector("ul");
        let child = e.lastElementChild;
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
        check();
    }
})



function handleRemoval(li) {
    let deleteDiv = li.querySelector(".delete");
   
    deleteDiv.addEventListener("click", () => {
        li.remove();
        check();
    })


      
}




function check() {
    if (ulList.querySelectorAll("li").length == 0) {
        delAll.style.display = "none"
    } else if(ulList.querySelectorAll("li").length > 0){
        delAll.style.display = "block"
    }
}



