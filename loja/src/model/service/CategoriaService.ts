import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../../entities/Categoria";
import { ILike, Repository } from "typeorm";
import { HttpException, HttpStatus } from "@nestjs/common";
import { DeleteResult } from "typeorm/browser";

export class categoriaService{
constructor(@InjectRepository(Categoria) private  readonly categoria:Repository<Categoria>){}
 
async findll ():Promise<Categoria[]>{

    return this.categoria.find()


}

async findbyid(id:number):Promise<Categoria>{
const categoriaNum = await  this.categoria.findOne({where:{id}})
if(!categoriaNum|| categoriaNum.id <= 0)
    throw new HttpException("nao foi possivel achar o id da categoria",HttpStatus.NOT_FOUND)

return categoriaNum
}

async findbyname (nome:string):Promise<Categoria[]>{

    const nomejogo = await this.categoria.find({where:{nomeCategoria:ILike(`%${nome}%`)}})
    return nomejogo

}

async delete(x:number):Promise<DeleteResult>{

    return this.categoria.delete(x)

}

async create(x:Categoria):Promise<Categoria>{
return this.categoria.save(x)

}

async atualiza(x:Categoria):Promise<Categoria>{
    
    if(x.id <= 0 || !x)
        throw new HttpException('nao foi encontrado id',HttpStatus.NOT_FOUND)
    await this.findbyid(x.id)

    return await this.categoria.save(x)
}

}