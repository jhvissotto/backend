import { faker } from '.'

export const sample = {
  department: 'Music',
  price: '199.00',
  product: 'Ball',
  productAdjective: 'Generic',
  productDescription:
    'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
  productMaterial: 'Cotton',
  productName: 'Intelligent Concrete Keyboard',
}

export const {
  department,
  price,
  product,
  productAdjective,
  productDescription,
  productMaterial,
  productName,
} = faker.commerce

// prettier-ignore
export function all({
  department            = [],
  price                 = [],
  product               = [],
  productAdjective      = [],
  productDescription    = [],
  productMaterial       = [],
  productName           = [],
}: {
  department?:           Parameters<typeof faker.commerce.department>,
  price?:                Parameters<typeof faker.commerce.price>,
  product?:              Parameters<typeof faker.commerce.product>,
  productAdjective?:     Parameters<typeof faker.commerce.productAdjective>,
  productDescription?:   Parameters<typeof faker.commerce.productDescription>,
  productMaterial?:      Parameters<typeof faker.commerce.productMaterial>,
  productName?:          Parameters<typeof faker.commerce.productName>,
}) {
  return {
    department:         faker.commerce.department(        ...department),
    price:              faker.commerce.price(             ...price),
    product:            faker.commerce.product(           ...product),
    productAdjective:   faker.commerce.productAdjective(  ...productAdjective),
    productDescription: faker.commerce.productDescription(...productDescription),
    productMaterial:    faker.commerce.productMaterial(   ...productMaterial),
    productName:        faker.commerce.productName(       ...productName),
  }
}
