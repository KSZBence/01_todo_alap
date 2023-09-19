import MegjelenitSor from "./MegjelenitSor.js"

class Megjelenit{
    constructor(lista, tarolo){
        this.megjelenites(lista,tarolo)
    }
    megjelenites(lista, tarolo){
        tarolo.append("<table class='table'></table>")
        for (let index = 0; index < lista.length; index++) {
            let elem = lista[index]
            new MegjelenitSor(elem, $(".table"), index)
        }
    }
}

export default Megjelenit