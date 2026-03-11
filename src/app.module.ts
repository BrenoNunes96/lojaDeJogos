import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos} from './entities/Produtos';
import { Categoria } from './entities/Categoria';
import { ProdutoModule } from '../produto.module';
import { categoriaModule } from './categoria.module';
import { Usuario } from './entities/Usuario';
import { usuarioModule } from './usuarios.module';
import { AuthModule } from './auth/auth.modules';
@Module({
  imports: [TypeOrmModule.forRoot({
    username:'root',
    password:'root',
    synchronize:true,
    host:'localhost',
    type:'mysql',
    database:'lojagames1',
    port:3306,
    entities:[Produtos,Categoria,Usuario]



  }),
ProdutoModule,categoriaModule,usuarioModule,AuthModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
