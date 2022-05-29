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
        let id = getId(e.target);
        let rowid = id.rowid;
        let colid = id.colid;
        let add = String.fromCharCode(65+colid) + (rowid + 1)+"";
        address.value = add;
    })
    allcell[i].addEventListener("blur",function(e){
        let cellValue = e.target.textContent;
        let id = getId(e.target)
        let rowid = id.rowid;
        let colid = id.colid;
        let cellObj = db[rowid][colid];
        cellObj.value = cellValue
        
        
    })
}



function getId(element){
    let rowid = Number(element.getAttribute("rowid"))
    let colid= Number(element.getAttribute("colid"))
    return {rowid,colid}
}


