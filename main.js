import { TODOLIST } from "./adatok.js"
import Megjelenit from "./Megjelenit.js"

$(function() {
    const TAROLO = $(".tarolo")
    new Megjelenit(TODOLIST,TAROLO)
})