function redirecionar(){
    if (document.getElementById('estu1').checked){
        window.location.href = "pag_estudante.html";
    } else if (document.getElementById('bibli1').checked) {
        window.location.href = "pag_bibliotecaria.html";
    } else {
        alert("Por favor, selecione uma opção.");
    }
}  
