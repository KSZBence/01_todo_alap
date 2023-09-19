import Model from "../model/Model.js"
import Megjelenit from "../view/Megjelenit.js"

class Controller{
    constructor(){
        const TAROLO = $(".tarolo")
        const MODEL = new Model();
        new Megjelenit(MODEL.getList(),TAROLO)
        new UrlapView
    
        $(window).on("torol", function(event){
            console.log(event.detail);
            MODEL.torol(event.detail);
            TAROLO.empty();
            new Megjelenit(MODEL.getList(),TAROLO)
        })

        $(window).on("done", function(event){
            MODEL.setKesz(event.detail, true)
            TAROLO.empty();
            new Megjelenit(MODEL.getList(),TAROLO)
        })

        $(window).on("iksz", function(event){
            MODEL.setKesz(event.detail, false)
            TAROLO.empty();
            new Megjelenit(MODEL.getList(),TAROLO)
        })

        $(window).on("kesz", function(event){
            MODEL.setKesz
            TAROLO.empty();
            new Megjelenit(MODEL.getList(),TAROLO)
        })
        
        $(window).on("hozzaadas", function(event){

            MODEL.hozzaadas(event.detail)
            TAROLO.empty();
            new Megjelenit(MODEL.getList(),TAROLO)
        })

    }
}

export default Controller