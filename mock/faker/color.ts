import { faker } from '.'

export const sample = {
  cmyk: [0.13, 0.68, 0.59, 0.67],
  colorByCSSColorSpace: [0.4924, 0.7625, 0.6526],
  cssSupportedFunction: 'rgb',
  cssSupportedSpace: 'a98-rgb',
  hsl: [280, 0.9, 0.24],
  human: 'orchid',
  hwb: [316, 0.89, 0.38],
  lab: [0.474809, -91.3383, 40.5755],
  lch: [0.504344, 229.5, 36],
  rgb: '#beb0dc',
  space: 'YDbDr',
}

export const {
  cmyk,
  colorByCSSColorSpace,
  cssSupportedFunction,
  cssSupportedSpace,
  hsl,
  human,
  hwb,
  lab,
  lch,
  rgb,
  space,
} = faker.color

// prettier-ignore
export function all({
  cmyk                  = [],
  colorByCSSColorSpace  = [],
  cssSupportedFunction  = [],
  cssSupportedSpace     = [],
  hsl                   = [],
  human                 = [],
  hwb                   = [],
  lab                   = [],
  lch                   = [],
  rgb                   = [],
  space                 = [],
}: {
  cmyk?:                 Parameters<typeof faker.color.cmyk>,
  colorByCSSColorSpace?: Parameters<typeof faker.color.colorByCSSColorSpace>,
  cssSupportedFunction?: Parameters<typeof faker.color.cssSupportedFunction>,
  cssSupportedSpace?:    Parameters<typeof faker.color.cssSupportedSpace>,
  hsl?:                  Parameters<typeof faker.color.hsl>,
  human?:                Parameters<typeof faker.color.human>,
  hwb?:                  Parameters<typeof faker.color.hwb>,
  lab?:                  Parameters<typeof faker.color.lab>,
  lch?:                  Parameters<typeof faker.color.lch>,
  rgb?:                  Parameters<typeof faker.color.rgb>,
  space?:                Parameters<typeof faker.color.space>,
}) {
  return {
    cmyk:                 faker.color.cmyk(                 ...cmyk),
    colorByCSSColorSpace: faker.color.colorByCSSColorSpace( ...colorByCSSColorSpace),
    cssSupportedFunction: faker.color.cssSupportedFunction( ...cssSupportedFunction),
    cssSupportedSpace:    faker.color.cssSupportedSpace(    ...cssSupportedSpace),
    hsl:                  faker.color.hsl(                  ...hsl),
    human:                faker.color.human(                ...human),
    hwb:                  faker.color.hwb(                  ...hwb),
    lab:                  faker.color.lab(                  ...lab),
    lch:                  faker.color.lch(                  ...lch),
    rgb:                  faker.color.rgb(                  ...rgb),
    space:                faker.color.space(                ...space),
  }
}
