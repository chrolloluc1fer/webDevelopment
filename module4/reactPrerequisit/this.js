//this keyword is for reference  purpose to any object
//this keyword value will depend how it is called


//1.funtion invocation
//2. Methoda invocation
// console.log(this)  //global call kia hai

// function abc(){
//     console.log("this inside a function",this);
// }


// abc();

let obj ={
    name: "Aman",
    age : 22,
    def: function(){                             // this is method
        function klm(){
            console.log(this)
        }
        klm();
    }
}
// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
// obj.def();    //method invocation

// console.log("##############################")

let ghi = obj.def;

ghi();