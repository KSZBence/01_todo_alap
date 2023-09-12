

class MegjelenitSor{
    #obj
    szuloelem
    constructor(obj, szuloelem){
        this.#obj = obj
        this.szuloelem = szuloelem;
        this.#sor()
        this.sorElem = this.szuloelem.children("tr:last-child")
        this.keszelem = this.sorElem.children("td").children(".pipa")
        this.nincskeszelem = this.sorElem.children("td").children(".twitter")
        this.torleskeszelem = this.sorElem.children("td").children(".torles")

        this.keszelem.on("click",() => {
            this.sorElem.css("background-color", "lightgreen")
            this.keszelem.css("filter", "grayscale()")
            this.nincskeszelem.html("❌")
            this.#esemenyTrigger("kesz")
        })

        this.nincskeszelem.on("click",() => {
            this.sorElem.css("background-color", "white")
            this.keszelem.css("filter", "none")
            this.nincskeszelem.html("✖")
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
        const esemeny = new CostumEvent(esemenyneve,{detail:this})
        window.dispatchEvent(esemeny);
    }
}
export default MegjelenitSor