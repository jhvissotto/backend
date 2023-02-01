import 'reflect-metadata'
import ioc from 'inversify'

// ========================================= //
// ================ MODULES ================ //
// ========================================= //
// prettier-ignore
const Modules = {
  Weapon_Sword: Symbol.for('Weapon_Sword'),
  Weapon_Arrow: Symbol.for('Weapon_Arrow'),
  Warrior:      Symbol.for('Warrior'),
}

// ============================================ //
// ================ INTERFACES ================ //
// ============================================ //
// prettier-ignore
module Interfaces {
  export interface Weapon_Sword  {   hit(): string }
  export interface Weapon_Arrow  { throw(): string }
  
  export interface Warrior {
      hit(): string
    throw(): string
  }
}

// ========================================= //
// ================ CLASSES ================ //
// ========================================= //
// prettier-ignore
module Classes {
  
  ioc.injectable()
  export class Weapon_Sword implements Interfaces.Weapon_Sword {
    public hit()   { return 'cut' }
  }
  ioc.injectable()
  export class Weapon_Arrow implements Interfaces.Weapon_Arrow {
    public throw() { return 'pierce' }
  }
  
  
  ioc.injectable()
  export class Warrior implements Interfaces.Warrior {
    // ======== inheriting ======== //
    private weapon_sword: Classes.Weapon_Sword
    private weapon_arrow: Classes.Weapon_Arrow
    public  constructor(
      @ioc.inject(Modules.Weapon_Sword) weapon_sword: Interfaces.Weapon_Sword,
      @ioc.inject(Modules.Weapon_Arrow) weapon_arrow: Interfaces.Weapon_Arrow
    ) {
      this.weapon_sword =               weapon_sword
      this.weapon_arrow =               weapon_arrow
    }

    // ======== methods ======== //
    public hit()   { return this.weapon_sword.hit()   }
    public throw() { return this.weapon_arrow.throw() }
  }
}

// =========================================== //
// ================ CONTAINER ================ //
// =========================================== //
const container = new ioc.Container()

container.load(
  new ioc.ContainerModule(bind => {
    bind<Interfaces.Weapon_Sword>(Modules.Weapon_Sword).to(Classes.Weapon_Sword)
    bind<Interfaces.Weapon_Arrow>(Modules.Weapon_Arrow).to(Classes.Weapon_Arrow)
    bind<Interfaces.Warrior>(Modules.Warrior).to(Classes.Warrior)
  })
)

// ===================================== //
// ================ USE ================ //
// ===================================== //
// prettier-ignore
const use = {
  weapon_sword: container.get<Interfaces.Weapon_Sword>(Modules.Weapon_Sword),
  weapon_arrow: container.get<Interfaces.Weapon_Arrow>(Modules.Weapon_Arrow),
  warrior:      container.get<Interfaces.Warrior>(Modules.Warrior),
}
