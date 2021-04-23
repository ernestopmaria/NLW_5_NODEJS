import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'

@Entity('settings')
class Setting{

  @PrimaryColumn("uuid")
  id?:string;

  @Column()
  username:string;
  @Column()
  chat:boolean;
  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){
      this.id=uuidv4()
    }
  }

}

export {Setting}