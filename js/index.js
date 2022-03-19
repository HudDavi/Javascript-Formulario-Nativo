//Exibe a Aba de Login e Esconde a de Cadastro
function abaLogin(){
	var abasLogin = document.getElementById("formulario-aba-login");
	var abasCadastro = document.getElementById("formulario-aba-cadastro");
    var login = document.getElementById("formulario-login");
    var cadastro = document.getElementById("formulario-cadastro");
	abasLogin.style.borderBottom = "none";
	abasCadastro.style.borderBottom = "1px solid #fff";
    login.style.display = "block";
    cadastro.style.display = "none";
}
//Exibe a Aba de Cadastro e Esconde a de Login
function abaCadastro(){
	var abasLogin = document.getElementById("formulario-aba-login");
	var abasCadastro = document.getElementById("formulario-aba-cadastro");
    var login = document.getElementById("formulario-login");
    var cadastro = document.getElementById("formulario-cadastro");
	abasLogin.style.borderBottom = "1px solid #fff";
	abasCadastro.style.borderBottom = "none";
    login.style.display = "none";
    cadastro.style.display = "block";
}