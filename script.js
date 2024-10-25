// Funzione per la prima calcolatrice (Risultato in Ohm)
// Funzione per la prima calcolatrice (Risultato in Ohm)
function calculateOhm() {
    const voltage = parseFloat(document.getElementById('voltage1').value);
    const current = parseFloat(document.getElementById('current1').value);
    const resistance = parseFloat(document.getElementById('resistance1').value);

    let result = '';

    if (resistance < 0) {
        result = 'Errore: la resistenza non può essere negativa.';
    } else if (!isNaN(voltage) && !isNaN(current)) {
        const res = voltage / current;
        result = `Risultato della Resistenza (R): ${res.toFixed(2)} ohm`;
    } else if (!isNaN(voltage) && !isNaN(resistance)) {
        const curr = voltage / resistance;
        result = `Risultato della Corrente (I): ${curr.toFixed(2)} A`;
    } else if (!isNaN(current) && !isNaN(resistance)) {
        const volt = current * resistance;
        result = `Risultato del Voltaggio (V): ${volt.toFixed(2)} V`;
    } else {
        result = 'Per favore, inserisci almeno due valori validi.';
    }

    document.getElementById('resultOhm').innerHTML = result;
}

// Funzione per la seconda calcolatrice (Risultato in Kilo-ohm)
function calculateKOhm() {
    const voltage = parseFloat(document.getElementById('voltage2').value);
    const current = parseFloat(document.getElementById('current2').value);
    const resistance = parseFloat(document.getElementById('resistance2').value);

    let result = '';

    if (resistance < 0) {
        result = 'Errore: la resistenza non può essere negativa.';
    } else if (!isNaN(voltage) && !isNaN(current)) {
        const res = voltage / current / 1000; // Conversione in kilo-ohm
        result = `Risultato della Resistenza (R): ${res.toFixed(3)} kΩ`;
    } else if (!isNaN(voltage) && !isNaN(resistance)) {
        const curr = voltage / (resistance * 1000); // Conversione da kilo-ohm a ohm
        result = `Risultato della Corrente (I): ${curr.toFixed(3)} A`;
    } else if (!isNaN(current) && !isNaN(resistance)) {
        const volt = current * (resistance * 1000); // Conversione da kilo-ohm a ohm
        result = `Risultato del Voltaggio (V): ${volt.toFixed(2)} V`;
    } else {
        result = 'Per favore, inserisci almeno due valori validi.';
    }

    document.getElementById('resultKOhm').innerHTML = result;
}

// Funzione per aprire/chiudere la tendina della Legge di Ohm
function togglePanel() {
    const panel = document.getElementById('infoPanel');
    if (panel.style.right === '0px') {
        panel.style.right = '-300px'; // Chiude il pannello
    } else {
        panel.style.right = '0px'; // Apre il pannello
    }
}
