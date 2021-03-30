let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

document.write ("Meses con 31 días: <br>")

for (let dias31 = 0; dias31 < 12; dias31++) {
    if (diasDelMes [dias31] === 31) { 
        console.log (meses [dias31] + (" tiene 31 días."))
        document.write (meses [dias31] + " ") // Mostrar los resultados en el documento.
    }
}

document.write ("<br> Meses con 30 días: <br>")

for (let dias30 = 0; dias30 < 12; dias30++) {
    if (diasDelMes [dias30] === 30) { 
        console.log (meses [dias30]  + (" tiene 30 días."))
        document.write (meses [dias30] + " ") // Mostrar los resultados en el documento.
    }
}

