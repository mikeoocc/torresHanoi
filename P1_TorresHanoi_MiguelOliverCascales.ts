let torreIni: number[] = []
let torreFin: number[] = []
let torreAux: number[] = []
let numDiscos = 3 // Cambiar este numero a gusto
let aux = 0

do{
    torreIni.push(numDiscos - aux)
    aux++
}
while(numDiscos - aux !== 0)

console.log(torreIni)


const moverDiscos = (numDiscos: number, torreIni: number[], torreFin: number[], torreAux: number[], nombreTorreIni: string, nombreTorreFin: string, nombreTorreAux: string) => {
   
    if (numDiscos === 0) {
        return
    }

    moverDiscos(numDiscos - 1, torreIni, torreAux, torreFin, nombreTorreIni, nombreTorreAux, nombreTorreFin)

    const discoMovido = torreIni.pop()
    if (discoMovido !== undefined) {
        torreFin.push(discoMovido)
        console.log("Muevo disco " + discoMovido + " desde " + nombreTorreIni + " a " + nombreTorreFin);
        console.log("Estado de las torres:")
        console.log("Torre " + nombreTorreIni + ": " + torreIni)
        console.log("Torre " + nombreTorreAux + ": " + torreAux)
        console.log("Torre " + nombreTorreFin + ": " + torreFin)
        console.log("***********************")
    }
    moverDiscos(numDiscos-1, torreAux, torreFin, torreIni, nombreTorreAux, nombreTorreFin, nombreTorreIni)
}

console.log("Torre Inicial: " + torreIni)
console.log("Torre Auxiliar: " + torreAux)
console.log("Torre Final: " + torreFin)
moverDiscos(3, torreIni, torreFin, torreAux, "Inicial", "Final", "Auxiliar")
console.log("FIN")