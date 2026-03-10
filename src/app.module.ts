import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogos } from './entities/Produtos';
import { Categoria } from './entities/Categoria';
import { ProdutoModule } from '../produto.module';
import { categoriaModule } from '../categoria.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    username:'root',
    password:'root',
    synchronize:true,
    host:'localhost',
    type:'mysql',
    database:'lojagames1',
    port:3306,
    entities:[Jogos,Categoria]



  }),
ProdutoModule,categoriaModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
