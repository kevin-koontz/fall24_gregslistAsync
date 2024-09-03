import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";


class HousesService {
  async getHouses() {
    console.time('timer')
    const response = await api.get('api/house')
    console.log('🏘️📡', response.data)

    console.timeEnd('timer')

  }


}

export const housesService = new HousesService