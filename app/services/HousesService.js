import { AppState } from "../AppState.js";
import { House } from "../models/House.js";


class HousesService {
  async getHouses() {
    console.time('timer')
    const response = await api.get('api/houses')
    console.log('🏘️📡');

    console.timeEnd('timer')

  }


}

export const housesService = new HousesService