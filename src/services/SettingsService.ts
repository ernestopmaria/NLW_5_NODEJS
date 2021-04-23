import { getCustomRepository } from "typeorm"
import { SettingRepository } from "../repository/SettingRepository"

interface ISettingsCreate{
  chat:boolean;
  username:string
}

class SettingsService{
  async create({chat,username}:ISettingsCreate){
    const settingsRepository = getCustomRepository(SettingRepository)

    const userAlreadyExists = await settingsRepository.findOne({username})

    if(userAlreadyExists){
      throw new Error("user already exists"); 
    }
  const settings = settingsRepository.create({
    username,
    chat
  })
    await settingsRepository.save(settings )
  return settings
  }
}

export { SettingsService}