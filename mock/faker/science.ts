import { faker } from '.'

export const sample = {
  chemicalElement: { symbol: 'Se', name: 'Selenium', atomicNumber: 34 },
  unit: { name: 'meter', symbol: 'm' },
}

// prettier-ignore
export const {
    chemicalElement,
    unit
} = faker.science

// prettier-ignore
export function all({
    chemicalElement = [],
    unit            = [],
}: {
    chemicalElement?: Parameters<typeof faker.science.chemicalElement>,
    unit?:            Parameters<typeof faker.science.unit>,
}) {

    return {
        chemicalElement: faker.science.chemicalElement( ...chemicalElement),
        unit:            faker.science.unit(            ...unit),
    } 
}
