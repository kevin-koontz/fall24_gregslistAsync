import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { House } from "./models/House.js"

class ObservableAppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    // NOTE when the app loads, there are no cars
  ]

  /** @type {House[]} */
  houses = [
    //NOTE - When the app loads, there are no houses
  ]


  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
}

export const AppState = createObservableProxy(new ObservableAppState())