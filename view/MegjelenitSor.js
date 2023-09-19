

class MegjelenitSor{
    #obj
    #index
    szuloelem
    constructor(obj, szuloelem, index){
        this.#obj = obj
        this.#index = index
        this.szuloelem = szuloelem;
        this.#sor()
        this.sorElem = this.szuloelem.children("tr:last-child")
        this.keszelem = this.sorElem.children("td").children(".pipa")
        this.nincskeszelem = this.sorElem.children("td").children(".twitter")
        this.torleselem = this.sorElem.children("td").children(".torles")

        if (this.#obj.kesz) {
            this.sorElem.css("background-color", "lightgreen")
            this.keszelem.css("filter", "grayscale()")
            this.nincskeszelem.html("❌")
        }

        this.keszelem.on("click",() => {
            this.#esemenyTrigger("done")
        })

        this.nincskeszelem.on("click",() => {
            this.sorElem.css("background-color", "white")
            this.keszelem.css("filter", "none")
            this.nincskeszelem.html("✖")
            this.#esemenyTrigger("iksz")
        })

        this.torleselem.on("click",() => {
            this.#esemenyTrigger("torol")
        })

        this.hozzaadaselem.on("click",() => {
            this.#esemenyTrigger("hozzaadas")
        })

        
    }

    #sor(){
        let szoveg = "<tr>"
        for (const i in this.#obj) {
            szoveg += `<td>${this.#obj[i]}</td>`;
        }
        szoveg += "<td><span class='pipa'>✔</span><span class='twitter'>✖</span><span class='torles'>🗑</span></td></tr>";
        this.szuloelem.append(szoveg)
    }
    #esemenyTrigger(esemenyneve) {
        const esemeny = new CustomEvent(esemenyneve,{detail:this.#index})
        window.dispatchEvent(esemeny);
    }
}
export default MegjelenitSor

