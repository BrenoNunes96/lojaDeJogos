import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./src/entities/Categoria";
import { categoriaController } from "./src/controller/CategoriaController";
import { categoriaService } from "./src/model/service/CategoriaService";
import { Jogos } from "./src/entities/Produtos";

@Module({
imports:[TypeOrmModule.forFeature([Categoria]),Jogos],
providers:[categoriaService],
exports:[],
controllers:[categoriaController]

})
export class categoriaModule{}