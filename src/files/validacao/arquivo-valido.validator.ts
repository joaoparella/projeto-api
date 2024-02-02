import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { FilesArmazenados } from "../files.dm";

@Injectable()
@ValidatorConstraint({async:true})
export class ArquivoValidoValidator implements ValidatorConstraintInterface{
    constructor (private arquivos: FilesArmazenados){}
    
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const validaArquivo = await this.arquivos.validaArquivo(value);
        return validaArquivo;
    }    
}

export const ArquivoValido = (opcaoValidacao: ValidationOptions)=>{
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: ArquivoValidoValidator,
        })
    }
}