import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'

@Entity('users')
class User{

  @PrimaryColumn("uuid")
  id?:string;

  @Column()
  email:string;
  
  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){
      this.id=uuidv4()
    }
  }

}

export {User}