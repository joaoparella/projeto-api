
import { PESSOA } from "src/pessoa/pessoa.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class FILME{
    @PrimaryColumn()
    ID: string;

    @Column()
    IDPESSOA:String;
    
    @Column()
    IDFILME:String;


    @ManyToOne(
        () => PESSOA,
        ator => ator.filmes,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
      )
      @JoinColumn([{ name: 'IDPESSOA', referencedColumnName: 'id' }])
      atores: PESSOA[];
    
      @ManyToOne(
        () => FILME,
        filme => filme.atores,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
      )
      @JoinColumn([{ name: 'IDFILME', referencedColumnName: 'id' }])
      courses: FILME[];

}