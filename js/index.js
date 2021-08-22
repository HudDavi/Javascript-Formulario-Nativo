//Exibe a Aba de Login e Esconde a de Cadastro
function abaLogin(){
    var login = document.getElementById("formulario-login");
    var cadastro = document.getElementById("formulario-cadastro");
    login.style.display = "block";
    cadastro.style.display = "none";
}
//Exibe a Aba de Cadastro e Esconde a de Login
function abaCadastro(){
    var login = document.getElementById("formulario-login");
    var cadastro = document.getElementById("formulario-cadastro");
    login.style.display = "none";
    cadastro.style.display = "block";
}