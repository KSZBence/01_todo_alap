class Megjelenit{
    constructor(lista, tarolo){
        this.megjelenites(lista,tarolo)
    }
    megjelenites(lista, tarolo){
        let szoveg = "<table class='table'>"
        for (let index = 0; index < lista.length; index++) {
             
            szoveg += "<tr><td>"+lista[index];+"</td></tr>"
            
        }
        szoveg += "</table>"
        tarolo.html(szoveg)
    }
}

export default Megjelenit