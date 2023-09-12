import { TODOLIST2 } from "./adatok.js"
import Megjelenit from "./Megjelenit.js"

$(function() {
    const TAROLO = $(".tarolo")
    new Megjelenit(TODOLIST2,TAROLO)
    
    $(window).on("kesz", function(event){
        console.log(event.detail);
    })
})