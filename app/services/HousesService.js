import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";


class HousesService {
  async getHouses() {
    console.time('timer')
    const response = await api.get('api/houses')
    console.log('🏘️📡', response.data)
    console.timeEnd('timer')

    const houses = response.data.map(houseData => new House(houseData))
    console.log('✨🏘️✨🏘️', houses);

    AppState.houses = houses

  }


}

export const housesService = new HousesService()