import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/Categoria";
import { categoriaController } from "./controller/CategoriaController";
import { categoriaService } from "./model/service/CategoriaService";


@Module({
imports:[TypeOrmModule.forFeature([Categoria])],
providers:[categoriaService],
exports:[],
controllers:[categoriaController]

})
export class categoriaModule{}