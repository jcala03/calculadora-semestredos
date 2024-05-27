function calcularNotaTotal() {
    const corte1 = parseFloat(document.getElementById('corte1').value);
    const corte2 = parseFloat(document.getElementById('corte2').value);
    const corte3 = parseFloat(document.getElementById('corte3').value);
    const corte4 = parseFloat(document.getElementById('corte4').value);

    if (isNaN(corte1) || isNaN(corte2) || isNaN(corte3) || isNaN(corte4)) {
        alert('Por favor, ingresa todas las notas.');
        return;
    }

    const notaTotal = corte1 * 0.30 + corte2 * 0.30 + corte3 * 0.30 + corte4 * 0.10;
    
    document.getElementById('resultado').innerText = `Tu nota total es: ${notaTotal.toFixed(2)}`;
}
