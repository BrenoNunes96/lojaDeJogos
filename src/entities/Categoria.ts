import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogos } from "./Produtos";

@Entity({name:"tb_categoria"})
export class Categoria{
    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @Column({length:255,nullable:false})
    nomeCategoria : string
    
@OneToMany(()=> Jogos,(x)=>x.categoria)

    Produto:Jogos[]



}