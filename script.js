const reclamacao = document.getElementById("reclamacao");
const sugestao = document.getElementById("sugestao");

const contadorReclamacao = document.getElementById("contadorReclamacao");
const contadorSugestao = document.getElementById("contadorSugestao");

reclamacao.addEventListener("input", function () {
    contadorReclamacao.textContent = reclamacao.value.length + "/300";
});

sugestao.addEventListener("input", function () {
    contadorSugestao.textContent = sugestao.value.length + "/300";
});

const botao = document.querySelector(".btn-feedback");
const popup = document.getElementById("popup");
const fechar = document.getElementById("fecharPopup");

botao.addEventListener("click", function () {
    popup.style.display = "flex";

    reclamacao.value = "";
    sugestao.value = "";

    contadorReclamacao.textContent = "0/300";
    contadorSugestao.textContent = "0/300";
});

fechar.addEventListener("click", function () {
    popup.style.display = "none";
});