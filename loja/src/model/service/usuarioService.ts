import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../../entities/Usuario";
import { Repository } from "typeorm";
import { differenceInYears } from "date-fns";
import { HttpException, HttpStatus } from "@nestjs/common";
import { DeleteResult } from "typeorm/browser";

export class usuarioService{
constructor(  @InjectRepository(Usuario)  private readonly usuario:Repository<Usuario>  ){}

async create(x:Usuario):Promise<Usuario>{
if(x){

const dataDeNascimento = x.dataDeNascimento
const data = new Date()
const idade = differenceInYears(dataDeNascimento,data)

if(idade >18){
 console.log("maior de idade")
}

}

return this.usuario.save(x)



}
async findall():Promise<Usuario[]>{
    return this.usuario.find();
}
async findbyid(id:number):Promise<Usuario>{
const usuarioId = await this.usuario.findOne({where:{id}})

if(!usuarioId)
    throw new HttpException("usuario sem id registrado",HttpStatus.NOT_FOUND)

return usuarioId

}

async findbynome(nome:string):Promise<Usuario[]>{


const nomeusuario = await this.usuario.find({where:{nome}})

if(!nomeusuario)
    throw new HttpException("esse nome nao existe na tabela usuarios", HttpStatus.NOT_FOUND)
return nomeusuario



}



async delete(id:number):Promise<DeleteResult>{
return await this.usuario.delete(id)


}

async update(usuario:Usuario):Promise<Usuario>{



    if(!usuario)
        throw new HttpException("usuario nao cadastrado",HttpStatus.NOT_FOUND)
await this.findbyid(usuario.id)

return await this.usuario.save(usuario)



}






}