import Data from "./Data/Data.js";

var agora = new Data();
var nomeUser = sessionStorage.getItem("Nome");


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







