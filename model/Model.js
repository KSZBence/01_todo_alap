import { TODOLIST2 } from "./adatok.js"

class Model{
    #list = []
    constructor(){
        this.#list = TODOLIST2;  
    }

    getList(){
        return this.#list;
    }

    torol(index){
        this.#list.splice(index, 1)
    }

    setKesz(index, value){
        this.#list[index].kesz = value
        console.log(this.#list[index].kesz);
    }
}

export default Model