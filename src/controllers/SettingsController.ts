import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController{
async create(request:Request, response:Response){
  const {username, chat}= request.body
  const settingsService = new SettingsService()

 try {
  const settings = await settingsService.create({username, chat})

 
  return response.json(settings)
 } catch (error) {
   return response.status(400).json({message:error.message})
   
   
 }
}
}

export {SettingsController}