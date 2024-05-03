export default class Data{

    #_Date(){
        return this.date = new Date();
    }

    #_Dia(){
        return String(this.#_Date().getDate()).padStart(2, "0");
    }

    #_Hora(){
        return String(this.#_Date().getHours()).padStart(2, "0");
    }

    #_Minutos(){
        return String(this.#_Date().getMinutes()).padStart(2, "0");
    }

    #_Segundos(){
        return String(this.#_Date().getSeconds()).padStart(2, "0");
    }

    #_DiaSemana(){
        var diaSemana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];
        this.diaSem = this.#_Date().getDay();
        return diaSemana[this.diaSem];
    }

    #_MesNumeral(){
        var mesesNumerais = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        this.mesNum = this.#_Date().getMonth();
        return mesesNumerais[this.mesNum];
    }

    #_MesExtenso(){
        var mesesExtenso = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        this.mesExt = this.#_Date().getMonth();
        return mesesExtenso[this.mesExt];
    }

    getDiaSemana(){
        return this.diaSemana = this.#_DiaSemana();
    }

    getMesNumeral(){
        return this.mesNumeral = this.#_MesNumeral();
    }

    getMesExtenso(){
        return this.mesExtenso = this.#_MesExtenso();
    }

    getDia(){
        return this.dia = this.#_Dia();
    }

    getHoras(){
        return this.horas = this.#_Hora();
    }

    getMinutos(){
        return this.minutos = this.#_Minutos();
    }

    getSegundos(){
        return this.segundos = this.#_Segundos();
    }

    getHorasMinutos(){
        return this.getHoras() + ":" + this.getMinutos();
    }

    getHorasMinutosSegundos(){
        return this.getHoras() + ":" + this.getMinutos() + ":" + this.getSegundos();
    }

    getDataNumeral(){
        return this.getDia() + "/" + this.getMesNumeral() + "/" + this.#_Date().getFullYear();
    }

    getDataExtenso(){
        return this.getDia() + " de " + this.getMesExtenso() + " de " + this.#_Date().getFullYear();
    }

    getDiaSemanaComDataNumeral(){
        return this.getDiaSemana() + ", " + this.getDataNumeral();
    }

    getDiaSemanaComDataExtenso(){
        return this.getDiaSemana() + ", " + this.getDataExtenso();
    }
    

}
