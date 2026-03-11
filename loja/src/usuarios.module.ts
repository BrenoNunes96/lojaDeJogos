import { TypeOrmModule } from "@nestjs/typeorm";
import { usuarioService } from "./model/service/usuarioService";
import { Usuario } from "./entities/Usuario";
import { Module } from "@nestjs/common";
import { usuarioController } from "./controller/usuarioController";


@Module({
    imports:[TypeOrmModule.forFeature([Usuario])],
    providers:[usuarioService],
    controllers:[usuarioController]







})

export class usuarioModule{}