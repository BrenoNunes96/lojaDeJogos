import { Body, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Put,Post,Controller, Delete } from "@nestjs/common";
import { ProdutoService } from "../model/service/ProdutoService";
import { Jogos } from "../entities/Produtos";
import { DeleteResult } from "typeorm";
@Controller("/jogos")
export class produtoController{
constructor(private  readonly produtoService: ProdutoService){}

@Get()
@HttpCode(HttpStatus.OK)
findall():Promise<Jogos[]>{
return this.produtoService.findall()

}
@Get("/:id")
findbyid(@Param("id",ParseIntPipe)id:number ):Promise<Jogos>{

return this.produtoService.findbyid(id)


}

@Post("/criar")
@HttpCode(HttpStatus.CREATED)
create(@Body() jogo:Jogos ):Promise<Jogos>{
return this.produtoService.create(jogo)

}

@Put("/atualizar")
@HttpCode(HttpStatus.OK)
atualizar(@Body() Jogo:Jogos):Promise<Jogos>{

    return this.produtoService.update(Jogo)
}



@Delete("/deletar/:id")
@HttpCode(HttpStatus.NO_CONTENT)
deletar(@Param("id",ParseIntPipe) id:number ):Promise<DeleteResult>{

return this.produtoService.delete(id)

}


@Get('/nomejogo/:nome')
@HttpCode(HttpStatus.OK)
nomeJogo(@Param('nome') nome:string ):Promise<Jogos[]>{

return this.produtoService.findbyname(nome)

}







}