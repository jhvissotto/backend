// ========================================= //
// ================ library ================ //
// ========================================= //
// import type { interfaces } from 'inversify'
// import { inject, injectable, Container, ContainerModule } from 'inversify'
import type IOC from 'inversify'
import ioc from 'inversify'
import 'reflect-metadata'

// ========================================= //
// ================ modules ================ //
// ========================================= //
const modules = {
  calc: {
    arit: Symbol.for('calc.arit'),
    geom: Symbol.for('calc.geom'),
  },
}

// ============================================ //
// ================ interfaces ================ //
// ============================================ //
module Interfaces {
  export module Cacl {
    export interface Arit {
      sum(a: number, b: number): number
      sub(a: number, b: number): number
    }
    export interface Geom {
      mult(a: number, b: number): number
      div(a: number, b: number): number
    }
  }
}

// ========================================= //
// ================ classes ================ //
// ========================================= //
// prettier-ignore
module Classes {

  export module Calc {

    ioc.injectable()
    export class Arit implements Interfaces.Cacl.Arit {
      sum(a: number, b: number): number { return a + b }
      sub(a: number, b: number): number { return a - b }
    }
            
    ioc.injectable()
    export class Geom implements Interfaces.Cacl.Geom {
      mult(a: number, b: number): number { return a * b }
      div (a: number, b: number): number { return a / b }
    }

  }

}

// =========================================== //
// ================ container ================ //
// =========================================== //
const container = new ioc.Container()

container.load(
  new ioc.ContainerModule(bind => {
    bind<Interfaces.Cacl.Arit>(modules.calc.arit).to(Classes.Calc.Arit)
    bind<Interfaces.Cacl.Geom>(modules.calc.geom).to(Classes.Calc.Geom)
  })
)

// ===================================== //
// ================ use ================ //
// ===================================== //
const use = {
  calc: {
    arit: container.get<Interfaces.Cacl.Arit>(modules.calc.arit),
    geom: container.get<Interfaces.Cacl.Geom>(modules.calc.geom),
  },
}
