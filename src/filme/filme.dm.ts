import { Injectable } from "@nestjs/common";
import { FilmeEntity } from "./filme.entity";


@Injectable()
export class FilmesArmazenados{
    #filmes: FilmeEntity[] = [];  

    Adicionar(Filme: FilmeEntity){
        this.#filmes.push(Filme);
    }

    atualiza(id: string, dadosAtualizacao: Partial<FilmeEntity>){
        const filme = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                filme[chave] = valor;
            }
        )

        return filme;
    }

    private buscaPorID(id: string){
        const possivel = this.#filmes.find(
            filmeSalvo => filmeSalvo.id === id
        )

        if (!possivel){
            throw new Error('Filme nao encontrado')
        }
        
        return possivel;
    }

    async remove(id: string){
        const filme = this.buscaPorID(id);

        this.#filmes = this.#filmes.filter(
            filmeSalvo => filmeSalvo.id !== id
        )

        return filme;
    }

    async Compartilhar(id: string){
        const filme = this.buscaPorID(id);

        return `Estou assistindo o filme ${filme.nome} que é do genero ${filme.genero} que conta a seguinte história: ${filme.sinopse} foi lançado em ${filme.ano} e tem duração de ${filme.duracao} minutos. Assista também!!` 
    }
    

    get Filmes(){        
        return this.#filmes;
    }
}