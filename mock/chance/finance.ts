import { chance } from '.'

export const sample = {
  cc: '6011526903163242',
  currency: { code: 'CHF', name: 'Switzerland Franc' },
  currency_pair: [
    { code: 'FJD', name: 'Fiji Dollar' },
    { code: 'GGP', name: 'Guernsey Pound' },
  ],
  dollar: '$6696.87',
  euro: '8,100.19€',
  exp_month: '10',
  exp_year: '2029',
}

// prettier-ignore
export const {
  cc,
  cc_type,
  currency,
  currency_pair,
  dollar,
  euro,
  exp,
  exp_month,
  exp_year,
} = chance

// prettier-ignore
export function all({
  cc              = [],
  // cc_type         = [],
  currency        = [],
  currency_pair   = [],
  dollar          = [],
  euro            = [],
  // exp             = [],
  exp_month       = [],
  exp_year        = [],
}: {
  cc?:             Parameters<typeof chance.cc>,
  // cc_type:         Parameters<typeof chance.cc_type>,
  currency?:       Parameters<typeof chance.currency>,
  currency_pair?:  Parameters<typeof chance.currency_pair>,
  dollar?:         Parameters<typeof chance.dollar>,
  euro?:           Parameters<typeof chance.euro>,
  // exp:             Parameters<typeof chance.exp>,
  exp_month?:      Parameters<typeof chance.exp_month>,
  exp_year?:       Parameters<typeof chance.exp_year>,
}) {
  return {
    cc:             chance.cc(            ...cc),
    // cc_type:        chance.cc_type(       ...cc_type),
    currency:       chance.currency(      ...currency),
    currency_pair:  chance.currency_pair( ...currency_pair),
    dollar:         chance.dollar(        ...dollar),
    euro:           chance.euro(          ...euro),
    // exp:            chance.exp(           ...exp),
    exp_month:      chance.exp_month(     ...exp_month),
    exp_year:       chance.exp_year(      ...exp_year),
  } 
}
