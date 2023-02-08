import { faker } from '.'

export const sample = {
  bicycle: 'Mountain Bicycle',
  color: 'tan',
  fuel: 'Hybrid',
  manufacturer: 'Dodge',
  model: 'Colorado',
  type: 'Hatchback',
  vehicle: 'Smart Jetta',
  vin: '8U9ZDLBJLRKH38739',
  vrm: 'ZJ70IAQ',
}

// prettier-ignore
export const {
    bicycle,
    color,
    fuel,
    manufacturer,
    model,
    type,
    vehicle,
    vin,
    vrm,
} = faker.vehicle

// prettier-ignore
export function all({
    bicycle         = [],
    color           = [],
    fuel            = [],
    manufacturer    = [],
    model           = [],
    type            = [],
    vehicle         = [],
    vin             = [],
    vrm             = [],
}: {
    bicycle?:      Parameters<typeof faker.vehicle.bicycle>,
    color?:        Parameters<typeof faker.vehicle.color>,
    fuel?:         Parameters<typeof faker.vehicle.fuel>,
    manufacturer?: Parameters<typeof faker.vehicle.manufacturer>,
    model?:        Parameters<typeof faker.vehicle.model>,
    type?:         Parameters<typeof faker.vehicle.type>,
    vehicle?:      Parameters<typeof faker.vehicle.vehicle>,
    vin?:          Parameters<typeof faker.vehicle.vin>,
    vrm?:          Parameters<typeof faker.vehicle.vrm>,
}) {

    return {
        bicycle:        faker.vehicle.bicycle(      ...bicycle),
        color:          faker.vehicle.color(        ...color),
        fuel:           faker.vehicle.fuel(         ...fuel),
        manufacturer:   faker.vehicle.manufacturer( ...manufacturer),
        model:          faker.vehicle.model(        ...model),
        type:           faker.vehicle.type(         ...type),
        vehicle:        faker.vehicle.vehicle(      ...vehicle),
        vin:            faker.vehicle.vin(          ...vin),
        vrm:            faker.vehicle.vrm(          ...vrm),
    } 
}
