import 'reflect-metadata'
import { injectable, inject, Container } from 'inversify'



// ============================================= //
// ================ DEFINITIONS ================ //
// ============================================= //
export interface Warrior {
    shortFight(): string
    longFight(): string
}

export interface CuttingWeapon {
    hit(): string
}

export interface PiercingWeapon {
    throw(): string
}



// =========================================== //
// ================ IOC TYPES ================ //
// =========================================== //
export const TYPES = {
    Warrior:        Symbol.for('Warrior'),
    CuttingWeapon:  Symbol.for('CuttingWeapon'),
    PiercingWeapon: Symbol.for('PiercingWeapon')
}



// ================================================ //
// ================ IMPLEMENTATION ================ //
// ================================================ //
@injectable
export class Sword implements CuttingWeapon {
    public hit() {
        return 'cut!'
    }
}

@injectable
export class Arrow implements PiercingWeapon {
    public throw() {
        return 'pierce!'
    }
}

@injectable
export class Infantry implements Warrior {

    private _sword: Sword 
    private _arrow: Arrow 

    public constructor(
        @inject(TYPES.CuttingWeapon) sword: CuttingWeapon, 
        @inject(TYPES.PiercingWeapon) arrow: PiercingWeapon
    ) {
        this._sword = sword
        this._arrow = arrow
    }


    public shortFight() {
        return this._sword.hit()
    }

    public longFight() {
        return this._arrow.throw()
    }

}



// ====================================== //
// ================ BIND ================ //
// ====================================== //

export const map = new Container()

map.bind<Warrior>(TYPES.Warrior).to(Infantry)
map.bind<CuttingWeapon>(TYPES.CuttingWeapon).to(Sword)
map.bind<PiercingWeapon>(TYPES.PiercingWeapon).to(Arrow)



// ============================================= //
// ================ UTILIZATION ================ //
// ============================================= //

const infantry = map.get<Warrior>(TYPES.Warrior)

console.log(infantry.longFight())
console.log(infantry.shortFight())