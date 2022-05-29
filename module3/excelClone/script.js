let topRow = document.querySelector(".top-row")
let leftCol = document.querySelector(".left-col")
let topLeftCell = document.querySelector(".top-left-cell")
let allcell  = document.querySelectorAll(".cell")
let address = document.querySelector("#address")

cellsContentDiv.addEventListener("scroll",(e)=>{
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    topRow.style.top = scrollFromTop +"px";
    leftCol.style.left = scrollFromLeft+"px";
    topLeftCell.style.top = scrollFromTop+"px";
    topLeftCell.style.left = scrollFromLeft+"px";
})
 
for(let i = 0; i < allcell.length;i++){
    allcell[i].addEventListener("click",(e)=>{
        let rowid = Number(e.target.getAttribute("rowid"))
        let colid = Number(e.target.getAttribute("colid"))
        let add = String.fromCharCode(65+colid) + (rowid + 1)+"";
        address.value = add;
    })
}
