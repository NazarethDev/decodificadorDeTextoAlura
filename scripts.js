let textoInput = document.querySelector("#textoParaCriptografar");
let textoOutput = document.querySelector("#textoCriptografado");

document.getElementById("criptografar").addEventListener("click", criptografar);
document.getElementById("descriptografar").addEventListener("click", descriptografar);
document.getElementById("copiaTexto").addEventListener("click", copiarTexto);

function criptografar() {
    let texto = textoInput.value;

    if (/[^a-z ]/g.test(texto)) {
        alert("O texto contém caracteres inválidos. Por favor, insira apenas letras minúsculas sem acentos e espaços.");
        return;
    }
    
    let criptografiaResultado = texto.replace(/[aeiou]/g, function(corresponder) {
        switch (corresponder) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });

    document.getElementById("textoTratado").innerHTML = criptografiaResultado;
}

function descriptografar() {
    let texto = textoInput.value;

    if (/[^a-z ]/g.test(texto)) {
        alert("O texto contém caracteres inválidos. Por favor, insira apenas letras minúsculas sem acentos e espaços.");
        return;
    }
    
    let descriptografiaResultado = texto.replace(/ai|enter|imes|ober|ufat/g, function(correspDescripto) {
        switch (correspDescripto) {
            case 'ai': return 'a';
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ober': return 'o';
            case 'ufat': return 'u';
        }
    });

    document.getElementById("textoTratado").innerHTML = descriptografiaResultado;

}

document.getElementById("criptografar").addEventListener("click", alternarDivs);
document.getElementById("descriptografar").addEventListener("click", alternarDivs);

function alternarDivs() {
    let divAntes = document.getElementById("mensagemAntesCriptografia");
    let divDepois = document.getElementById("mensagemDepoisCriptografia");
    if (divAntes.style.display === 'none' || divAntes.style.display === '') {
        divAntes.style.display = 'flex'; 
        divDepois.style.display = 'none'; 
    } else {
        divAntes.style.display = 'none'; 
        divDepois.style.display = 'flex'; 
    }
}

function copiarTexto() {
    let textoTratado = document.getElementById("textoTratado").innerText;
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = textoTratado;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
}
