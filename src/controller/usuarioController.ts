import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Injectable, Param, ParseIntPipe, Post,Put} from "@nestjs/common";
import { Usuario } from "../entities/Usuario";
import { usuarioService } from "../model/service/usuarioService";

@Injectable()
@Controller("/usuario")
export class usuarioController{
constructor(private usuario:usuarioService){}


@Post("/cadastrar")
@HttpCode(HttpStatus.CREATED)
create(@Body() x:Usuario):Promise<Usuario>{
return this.usuario.create(x)
}

@Get()
@HttpCode(HttpStatus.OK)
findall():Promise<Usuario[]>{
return this.usuario.findall()
}

@Get("/:id")
@HttpCode(HttpStatus.OK)
findbyid(@Param("id",ParseIntPipe)id:number   ):Promise<Usuario>{
return this.usuario.findbyid(id)
}

@Delete("/deletar/:id")
@HttpCode(HttpStatus.OK)
deletar(@Param("id", ParseIntPipe) id:number){
return this.usuario.delete(id)
}


@Put("/atualizar")
@HttpCode(HttpStatus.OK)
update(@Body() usuario:Usuario):Promise<Usuario>{
return this.usuario.update(usuario)

}


}