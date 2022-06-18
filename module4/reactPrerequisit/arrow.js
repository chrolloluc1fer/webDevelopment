let name = "Chollo"
let obj = {
    name:"shubham",
    def :()=>{
        console.log(this.name);
    },
    def2:function abc(){
        console.log(this.name)
    }
}

obj.def();