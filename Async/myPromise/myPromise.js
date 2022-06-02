class myPromise{
    #thenCbs = [];
    constructor(cb){
        try{
            cb(this.#onSuccess,this.#onFail)
        }
        catch (e){
            this.onFail(e)
        }
    }

    #onSuccess(value){

    }
    #onFail(value){

    }
    then(cb){
        this.#thenCbs.push(cb);
    }

}

module.export = myPromise;


const p = new Promise(cb)
p.then(()=>{

}).catch(()=>{

})