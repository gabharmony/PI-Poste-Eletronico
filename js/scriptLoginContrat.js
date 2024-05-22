const formContratLogin = document.querySelector("#login-contrat");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

function clickLogin(){
    event.preventDefault();
    if(email.value.length >= 13 && senha.value.length >=8){
        loginContrat();
    }
    else{
        const div = document.querySelector(".status");
        div.innerHTML = '<div class="alert alert-danger" role="alert">Digite seus dados corretamente.</div>';
        let log = {
            email: email.value.length,
            senha: senha.value.length
        }
        console.log(log)
    }
}

function loginContrat(){
    const url = "http://localhost:8080/contratante/login/"+ email.value + "/" + senha.value;
    fetch(url)
    .then(response => response.json())  
    .then(data => {
        sessionStorage.setItem("idPrest", data.id_prestador);
        sessionStorage.setItem("nomePrest", data.nome);
        sessionStorage.setItem("sobrenomePrest", data.sobrenome);
        sessionStorage.setItem("celularPrest", data.celular);
        sessionStorage.setItem("emailPrest", data.email);
        sessionStorage.setItem("senhaPrest", data.senha);

        setInterval(redirecionarHome, 2000)
    })  
    .catch(function (res) {console.log(res) 
        const div = document.querySelector(".status");
        div.innerHTML = '<div class="alert alert-danger" role="alert">Email ou senha incorretos.</div>';
        let log = {
            email: email.value,
            senha: senha.value
        }
        console.log(log)
    })
}

function redirecionarHome(){
    window.location.replace("http://127.0.0.1:5500/app/homec.html");
}

formContratLogin.addEventListener("submit", clickLogin)