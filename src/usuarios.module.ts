import { TypeOrmModule } from "@nestjs/typeorm";
import { usuarioService } from "./model/service/usuarioService";
import { Usuario } from "./entities/Usuario";
import { forwardRef, Module } from "@nestjs/common";
import { usuarioController } from "./controller/usuarioController";
import { AuthModule } from "./auth/auth.modules";


@Module({
    imports:[TypeOrmModule.forFeature([Usuario]),forwardRef(()=>AuthModule)],
    providers:[usuarioService],
    controllers:[usuarioController],
exports:[usuarioService]






})

export class usuarioModule{}