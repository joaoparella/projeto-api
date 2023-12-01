export class ListaFilmesDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly duracao: BigInteger,
        readonly sinopse: string,        
        ){}
}
