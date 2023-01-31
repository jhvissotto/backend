import { Warrior } from './1-interfaces'
import { TYPES } from './2-types'
import { map } from './4-inversify.config'


// ============================================= //
// ================ UTILIZATION ================ //
// ============================================= //

const infantry = map.get<Warrior>(TYPES.Warrior)

console.log(infantry.longFight())
console.log(infantry.shortFight())