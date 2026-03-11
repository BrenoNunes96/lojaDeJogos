import {  IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { numeritransformer } from "../util/numeritransformer";


@Entity({name:"tb_jogos"})

export class Produtos{
@PrimaryGeneratedColumn()
id:number;

@IsNotEmpty()
@Column({length:255,nullable:false})
nome:string;

@IsNumber({maxDecimalPlaces:2})
@IsNotEmpty()
@IsPositive()
@Column({type:'decimal',precision:10,scale:2,transformer: new numeritransformer()})
preco: number


@IsNotEmpty()
@Column({nullable:true})
imageUrl :string

@Column({type:Date})
data :Date


}