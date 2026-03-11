    import { TypeOrmModule } from "@nestjs/typeorm";
    import { produtoController } from "./src/controller/ProdutoController";
    import { ProdutoService } from "./src/model/service/ProdutoService";
    import {  Produtos } from "./src/entities/Produtos";
    import { Categoria } from "./src/entities/Categoria";
    import { Module } from "@nestjs/common";

    @Module({
    imports:[TypeOrmModule.forFeature([Produtos]),Categoria],
    providers:[ProdutoService],
    exports:[],
    controllers:[produtoController]

    })
    export class ProdutoModule{}