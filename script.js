function calculaDesconto(preco, desconto) {
    let valorDesconto = (preco * desconto) / 100;
    let precoComDesconto = preco - valorDesconto;
    return precoComDesconto;
}

function calcular() {
    let preco = parseFloat(document.getElementById('preco').value);
    let desconto = parseFloat(document.getElementById('desconto').value);
    let precoFinal = calculaDesconto(preco, desconto);
    document.getElementById('resultado').innerText = precoFinal.toFixed(2);
}