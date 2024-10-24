function calculate() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    
    let resultText = "";

    if (!isNaN(voltage) && !isNaN(resistance)) {
        const calculatedCurrent = voltage / resistance;
        resultText += `Corrente calcolata: ${calculatedCurrent.toFixed(2)} A<br>`;
    } else {
        resultText = "Per favore, inserisci sia il voltaggio che la resistenza.";
    }

    document.getElementById('result').innerHTML = resultText;
}
