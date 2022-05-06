let inputTag = document.querySelector("input");
let ulList = document.querySelector(".pending_task");
let cButton = document.querySelector(".clear");
let sButton = document.querySelector(".submit")
let liList = document.querySelectorAll("li")
let liButton = document.querySelectorAll("li button")
let delAll = document.querySelector(".deleteAll")
let completeTask = document.querySelector(".completed_task")
let delCTask = document.querySelector(".deleteAllCompletedTask")
let cHeading = document.querySelector(".completed_task_heading");

check();
checkComplete();
let value = inputTag.value;
inputTag.addEventListener("keydown", (e) => {
    let value = inputTag.value;
    if (e.key == 'Enter' && value != "") {
        if (value != "") {
            let li = document.createElement("li");
            li.innerHTML = `<div class="value">${value}</div><div class="task_button">
            <button class="delete">&#x2715;</button><button class="done">&#10004;</button></div>`
            inputTag.value = ""
            ulList.appendChild(li);
            handleRemoval(li);
            done(li);
            check();
            checkComplete();
        }
    }
})

sButton.addEventListener("click", (e) => {
    let value = inputTag.value;
    if (inputTag.value != "") {
       
        if (value != "") {
            let li = document.createElement("li");
            li.innerHTML = `<div class="value">${value}</div>
            <button class="delete">&#x2715;</button><button class="done">&#10004;</button></div>`
            inputTag.value = ""
            ulList.appendChild(li);        
            handleRemoval(li);
            done(li);
            check();
            checkComplete();

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
        checkComplete();
    }
})



function handleRemoval(li) {
    let deleteDiv = li.querySelector(".delete");
   
    deleteDiv.addEventListener("click", () => {
        li.remove();
        check();
        checkComplete();
    })
}




function check() {
    if (ulList.querySelectorAll("li").length == 0) {
        delAll.style.display = "none"
    } else if(ulList.querySelectorAll("li").length > 0){
        delAll.style.display = "block"
    }
}

function checkComplete() {
    if (completeTask.querySelectorAll("li").length == 0) {
        delCTask.style.display = "none"
        cHeading.style.display ="none"

    } else if(completeTask.querySelectorAll("li").length > 0){
        delCTask.style.display = "block"
        cHeading.style.display ="block"
    }
}


function done(li){

    let complete = li.querySelector(".done")
    
    complete.addEventListener("click",()=>{
        let doneValue = li.querySelector(".value")
        let li2 = document.createElement("li");
        li2.innerHTML=`<div class="done_task">${doneValue.innerText}</div>`
        completeTask.appendChild(li2);
        })

    completedelete = li.querySelector(".done")
    completedelete.addEventListener("click",()=>{
            li.remove();
            check();
            checkComplete();
    })

}

delCTask.addEventListener("click",()=>{
    if (completeTask.querySelectorAll("li").length > 0) {
        let menu = document.querySelector('.completed_task');
        while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
        checkComplete();
}
    }
})




