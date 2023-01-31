import { Container } from 'inversify'
import { Warrior, CuttingWeapon, PiercingWeapon } from './1-interfaces'
import { TYPES } from './2-types'
import { Infantry, Sword, Arrow } from './3-entities'


// ====================================== //
// ================ BIND ================ //
// ====================================== //

export const map = new Container()

map.bind<Warrior>(TYPES.Warrior).to(Infantry)
map.bind<CuttingWeapon>(TYPES.CuttingWeapon).to(Sword)
map.bind<PiercingWeapon>(TYPES.PiercingWeapon).to(Arrow)