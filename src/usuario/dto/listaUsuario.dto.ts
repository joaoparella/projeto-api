export class ListaUsuarioDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly cidade: string,
        readonly email: string,
        readonly assinatura: string
        ){}
}