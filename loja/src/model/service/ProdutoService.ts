import { InjectRepository } from "@nestjs/typeorm";
import { Produtos } from "../../entities/Produtos";
import { ILike, Repository } from "typeorm";
import { HttpException, HttpStatus } from "@nestjs/common";
import { DeleteResult } from "typeorm/browser";

export class ProdutoService{

constructor(@InjectRepository(Produtos) private readonly games:Repository<Produtos> ){}

async findall():Promise<Produtos[]>{

return await this.games.find()


}

async findbyid(id:number):Promise<Produtos>{


    const jogoPorId =await this.games.findOne({where:{id}})
   
    if(!jogoPorId || jogoPorId.id <= 0 ){
        throw new HttpException('id nao encontrado',HttpStatus.NOT_FOUND)
    }

    
    return jogoPorId
    

}
async create (jogo:Produtos): Promise<Produtos>{

    return this.games.save(jogo)
}

async delete(id:number):Promise<DeleteResult>{
    return this.games.delete(id)

}

async findbyname(nomejogo:string):Promise<Produtos[]>{

  const  jogonome =  await this.games.find({
where: { nome: ILike(`%${nomejogo}%`)}
})

return jogonome
}




async update(jogo:Produtos):Promise<Produtos>{
    
if(!jogo || jogo.id <=0)
    throw new HttpException("jogo nao encontrado",HttpStatus.NOT_FOUND)

await this.findbyid(jogo.id)

return await this.games.save(jogo)


}




    
}