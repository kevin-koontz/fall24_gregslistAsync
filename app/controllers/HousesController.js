import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class HousesController {
  constructor() {
    console.log('🏠🎮');


  }

  drawHouses() {
    console.log('✏️🏡');
    const houses = AppState.houses
    let housesHTML = ''
    houses.forEach(house => housesHTML += house.cardHTMLTemplate)
    setHTML('houses-listing', housesHTML)


  }

  async getHouses() {

    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }




}