import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post,Delete, Put } from "@nestjs/common";
import { Categoria } from "../entities/Categoria";
import { categoriaService } from "../model/service/CategoriaService";
import { DeleteResult } from "typeorm";


@Controller("/categoria")

export class categoriaController{
constructor(private categoria:categoriaService){}
@Get()
@HttpCode(HttpStatus.OK)
findall():Promise<Categoria[]>{
return this.categoria.findll()
}


@Get("/buscanome/:nome")
@HttpCode(HttpStatus.OK)
findbytitle(@Param('nome') nome:string){
return this.categoria.findbyname(nome)
}


@Post("/criar")
@HttpCode(HttpStatus.CREATED)
create(@Body() categorias:Categoria):Promise<Categoria>{
return this.categoria.create(categorias)

}


@Get("/categoriaId/:id")
@HttpCode(HttpStatus.OK)
findId(@Param('id',ParseIntPipe) id:number  ):Promise<Categoria>{
return this.categoria.findbyid(id)

}

@Delete("/deletar/:id")
@HttpCode(HttpStatus.OK)
deletar(@Param('id',ParseIntPipe) id:number ):Promise<DeleteResult>{

    return this.categoria.delete(id)


}

@Put("/atualizar")
@HttpCode(HttpStatus.OK)
update(x:Categoria):Promise<Categoria>{
return this.categoria.atualiza(x)

}



}