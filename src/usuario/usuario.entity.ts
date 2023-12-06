import Datas from "../utils/datas";

export class UsuarioEntity{
    id: string;
    nome: string;
    idade: BigInteger;
    cidade: string;
    email: string;
    telefone: string;
    senha: string; 
    assinatura: Date;
    #datas: Datas;
    
    constructor(id: string,nome: string,idade: BigInteger,cidade: string,email: string,telefone: string,senha: string){
        this.#datas = new Datas();
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
        this.assinatura = this.#datas.dataAtual();
    }


    retornaAssinatura(){
        return this.#datas.formatar(this.assinatura);
    }

    validarAssinatura(){
        var dias = this.#datas.diferencaDias(this.assinatura)
        return (dias >= 1)
    }

    adicionarAssinatura(dias){
        this.assinatura = this.#datas.adicionarDias(this.assinatura,dias)
    }

}