import {IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_usuarios"})
export class Usuario{

@PrimaryGeneratedColumn()
id:number



@IsNotEmpty()

@Column({length:255,nullable:false})
nome:string


@Column({length:500,nullable:false})
foto:string


@IsNotEmpty()
@Column({type:Date})
dataDeNascimento:Date






}