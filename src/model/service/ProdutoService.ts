import { InjectRepository } from "@nestjs/typeorm";
import { Jogos } from "../../entities/Produtos";
import { ILike, Repository } from "typeorm";
import { HttpException, HttpStatus } from "@nestjs/common";
import { DeleteResult } from "typeorm/browser";

export class ProdutoService{

constructor(@InjectRepository(Jogos) private readonly games:Repository<Jogos> ){}

async findall():Promise<Jogos[]>{

return await this.games.find()


}

async findbyid(id:number):Promise<Jogos>{


    const jogoPorId =await this.games.findOne({where:{id}})
   
    if(!jogoPorId || jogoPorId.id <= 0 ){
        throw new HttpException('id nao encontrado',HttpStatus.NOT_FOUND)
    }

    
    return jogoPorId
    

}
async create (jogo:Jogos): Promise<Jogos>{

    return this.games.save(jogo)
}

async delete(id:number):Promise<DeleteResult>{
    return this.games.delete(id)

}

async findbyname(nomejogo:string):Promise<Jogos[]>{

  const  jogonome =  await this.games.find({
where: { nome: ILike(`%${nomejogo}%`)}
})

return jogonome
}




async update(jogo:Jogos):Promise<Jogos>{
    
if(!jogo || jogo.id <=0)
    throw new HttpException("jogo nao encontrado",HttpStatus.NOT_FOUND)

await this.findbyid(jogo.id)

return await this.games.save(jogo)


}




    
}