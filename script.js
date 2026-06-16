const reclamacao=document.getElementById("reclamacao");
const sugestao=document.getElementById("sugestao");
const contadorReclamacao=document.getElementById("contadorReclamacao");
const contadorSugestao=document.getElementById("contadorSugestao");
const popup=document.getElementById("popup");
const fechar=document.getElementById("fecharPopup");

if(reclamacao&&contadorReclamacao){
reclamacao.addEventListener("input",function(){
contadorReclamacao.textContent=reclamacao.value.length+"/300";
});
}

if(sugestao&&contadorSugestao){
sugestao.addEventListener("input",function(){
contadorSugestao.textContent=sugestao.value.length+"/300";
});
}

if(window.location.search.includes("sucesso=1")&&popup){
setTimeout(function(){
popup.style.display="flex";
history.replaceState({},document.title,"index.html");
},1000);
}

if(fechar&&popup){
fechar.addEventListener("click",function(){
popup.style.display="none";
});
}