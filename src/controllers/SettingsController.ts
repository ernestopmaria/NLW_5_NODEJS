import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingRepository } from "../repository/SettingRepository";


class SettingsController{
async create(request:Request, response:Response){
  const {username, chat}= request.body
  const settingsRepository = getCustomRepository(SettingRepository)
  const settings = settingsRepository.create({
  username,
  chat
})
  await settingsRepository.save(settings )
return response.json(settings)
}
}

export {SettingsController}