let btnCalc = document.getElementById('btnCalc');
let btnVolta = document.getElementById('btnVoltar');
let calcImc = document.getElementById('calc-imc');
let resultImc = document.getElementById('result-imc');
let imcShow = document.getElementById('imc-show'); // Usar um id para manipular o conteúdo corretamente.

btnCalc.addEventListener('click', () => {
    // Captura os valores de peso e altura.
    let peso = document.getElementById('peso');
    let valorPeso = parseFloat(peso.value); // Converte para número.
    let altura = document.getElementById('altura');
    let valorAltura = parseFloat(altura.value); // Converte para número.

    // Verifica se os valores são válidos.
    if (isNaN(valorPeso) || isNaN(valorAltura) || valorAltura <= 0 || valorPeso <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calcula o IMC.
    let calImc = (valorPeso / (valorAltura * valorAltura)).toFixed(1); // Arredonda para uma casa decimal.
    let classifica;

    // Classificação do IMC.
    if (calImc < 18.5) {
        classifica = "magreza";
    } else if (calImc >= 18.5 && calImc <= 24.9) {
        classifica = "normal";
    } else if (calImc >= 25 && calImc <= 29.9) {
        classifica = "sobrepeso";
    } else if (calImc >= 30 && calImc <= 39.9) {
        classifica = "obesidade";
    } else {
        classifica = "grave";
    }

    // Alterna entre as seções.
    calcImc.style.display = 'none';
    resultImc.style.display = 'block';

    // Atualiza o resultado no HTML.
    if(classifica === "grave"){
        imcShow.innerHTML = `
            <h2>Seu IMC: <span class="imc-${classifica}">${calImc}</span></h2>
            <p>Situação atual: <span class="imc-${classifica}">Obesidade Grave</span></p>
        `;
    }
    else{
        imcShow.innerHTML = `
            <h2>Seu IMC: <span class="imc-${classifica}">${calImc}</span></h2>
            <p>Situação atual: <span class="imc-${classifica}">${classifica}</span></p>
        `;
    }

});

btnVolta.addEventListener('click', () => {
    // Alterna entre as seções.
    calcImc.style.display = 'block';
    resultImc.style.display = 'none';
});
