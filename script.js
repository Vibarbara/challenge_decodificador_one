const text_input = document.querySelector("#input_texto");
const text_result = document.querySelector("#text_result");
  
function criptografar() {

    const texto = text_input.value;

    const texto_criptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('text_result').innerHTML = '<textarea readonly id="texto_gerado">' + texto_criptografado + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiarTexto()">Copiar</button>';

}

function descriptografar() {
    const texto = text_input.value;

    const texto_descriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('text_result').innerHTML = '<textarea readonly id="texto_gerado">' + texto_descriptografado + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiarTexto()">Copiar</button>';
}

function limpar() {
  document.getElementById('input_texto').value = '';
}

function copiarTexto() {
  const copy_button = document.getElementById("texto_gerado").value;
  navigator.clipboard.writeText(copy_button).then(() => {
  });
}
