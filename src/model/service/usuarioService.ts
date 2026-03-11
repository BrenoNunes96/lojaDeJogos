import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../../entities/Usuario";
import { Repository } from "typeorm";
import { differenceInYears } from "date-fns";
import { HttpException, HttpStatus } from "@nestjs/common";
import { DeleteResult } from "typeorm/browser";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";

export class usuarioService{
constructor(  @InjectRepository(Usuario)  private readonly usuario:Repository<Usuario> , private bcrypt:Bcrypt  ){}

async create(x:Usuario):Promise<Usuario>{
const buscarusuario = await this.findbyusuario(x.usuario)
    if(buscarusuario){throw new HttpException('usuario ja cadastrado',HttpStatus.BAD_REQUEST)}

x.senha = await this.bcrypt.criptografarSenha(x.senha)




return await  this.usuario.save(x)



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

async findbyusuario(usuario:string):Promise<Usuario| null>{


return await this.usuario.findOne({where:{usuario}})




}



async delete(id:number):Promise<DeleteResult>{
return await this.usuario.delete(id)


}

async update(usuario:Usuario):Promise<Usuario>{
    await this.findbyid(usuario.id)
const buscarusuario = await this.findbyusuario(usuario.usuario)


    if(buscarusuario && buscarusuario.id !== usuario.id )
        throw new HttpException("usuario ja cadastrado",HttpStatus.NOT_FOUND)

return await this.usuario.save(usuario)



}






}