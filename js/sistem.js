import Data from "./Data/Data.js";

var agora = new Data();
var nomeUser = sessionStorage.getItem("nomePrest");
const content = document.querySelector(".content-principal");

function inicializacao(){
    var hora = agora.getHoras();
    var saudacao = "";
    if(hora >= 0 && hora <= 6){
        saudacao = "Boa madrugada, " + nomeUser + "!";
    }else if(hora >= 6 && hora <= 12){
        saudacao = "Bom dia, "  + nomeUser + "!";
    }else if(hora >= 12 && hora <=18){
        saudacao = "Boa tarde, " + nomeUser + "!";
    }else{
        saudacao = "Boa noite, " + nomeUser + "!";
    }

    document.getElementById("saudacao").innerHTML = saudacao;

    function mostrarData(){
        var data = document.getElementById("data");
        data.innerHTML = agora.getDiaSemanaComDataNumeral() + " " + agora.getHorasMinutos();
    }

    setInterval(mostrarData,1000);

    document.getElementById("dropdownNomeUser").innerHTML = nomeUser;
}

inicializacao();


const homePrest = '<div class="content-home"><h5 class="title-funcao">Home</h5><hr><div class="content-funcao-home"><p class="text-home">Essa é sua Home, em breve ela terá mais informações...</p></div></div>';
const addService = '<div class="content-addService"><h5 class="title-funcao">Adicionar Serviço</h5><hr><div class="content-funcao"><div class="row align-items-md-center"><div class="col disabled"></div><div class="col-md-6"><div class="h-100 p-5 bg-body-tertiary border rounded-3 text-center"><form class="addService-col"><div class="mb-3"><label for="inputServico" class="form-label">Serviço:</label><select class="form-select" aria-label="Default select" id="nome_servico"><option selected>Selecione o serviço</option><option value="Pedreiro">Pedreiro</option><option value="Eletricista">Eletricista</option><option value="Hidráulica">Hidráulica</option><option value="Professor Particular">Professor particular</option><option value="Outro">Outros...</option></select></div><div class="mb-3"><label for="inputDescricao" class="form-label">Descrição:</label><textarea class="form-control" placeholder="Descreva seu serviço aqui..." id="inputDescricao"></textarea></div><button type="submit" class="btn btn-primary">Adicionar</button></form></div></div><div class="col disabled"></div></div></div></div>';

carregarConteudo(homePrest);

const homeSidebar = document.querySelector("#homeSystem");
const addServiceSidebar = document.querySelector("#addService");

function carregarConteudo(conteudo){
    content.innerHTML = conteudo;
}

addServiceSidebar.addEventListener("click", () => {
    carregarConteudo(addService);
    homeSidebar.classList.remove("active");
    addServiceSidebar.classList.add("active");
});

homeSidebar.addEventListener("click", () => {
    carregarConteudo(homePrest);
    addServiceSidebar.classList.remove("active");
    homeSidebar.classList.add("active");
});
