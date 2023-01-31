import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { Warrior, CuttingWeapon, PiercingWeapon } from './1-interfaces'
import { TYPES } from './2-types'


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