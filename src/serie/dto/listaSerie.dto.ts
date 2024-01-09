export class ListaSeriesDTO{
    constructor(
        readonly id: string,
        readonly nomeSerie: string,
        readonly duracao: BigInteger,
        readonly nome: string,
        readonly episodio: string,
        readonly temporada: string,             
        ){}
}

