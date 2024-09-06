import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";



//NOTE - Next step: createHouse based on user input => Update Sandbox with newly created houses.

export class HousesController {
  constructor() {
    console.log('🏠🎮');
    AppState.on('houses', this.drawHouses)

    this.getHouses()

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