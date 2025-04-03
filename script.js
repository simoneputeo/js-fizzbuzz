const testoInserito = prompt("Inserisci il testo che vuoi venga convertito in alfabeto farfallino");
let testoFarfallino = "";
for (let i = 0; i < testoInserito.length; i++) {
    const lettera = testoInserito[i];
    testoFarfallino +=
            lettera === "a" ||
            lettera === "e" ||
            lettera === "i" ||
            lettera === "o" ||
            lettera === "u"
                    ? `${lettera}f${lettera}`
                    : lettera;
}
alert(testoFarfallino);