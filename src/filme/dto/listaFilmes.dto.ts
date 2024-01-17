export class ListaFilmesDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly duracao: number,
        readonly sinopse: string,        
        ){}
}
