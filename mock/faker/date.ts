import { faker } from '.'

export const sample = {
  between: '2023-02-08T20:41:00.112Z',
  betweens: [
    '2023-02-08T20:41:00.112Z',
    '2023-02-08T20:41:00.112Z',
    '2023-02-08T20:41:00.112Z',
  ],
  birthdate: '1996-05-13T05:41:45.302Z',
  future: '2023-10-19T02:37:03.695Z',
  month: 'July',
  past: '2022-07-08T03:13:01.729Z',
  recent: '2023-02-08T11:49:05.955Z',
  soon: '2023-02-08T23:08:16.569Z',
  weekday: 'Saturday',
}

export const {
  between,
  betweens,
  birthdate,
  future,
  month,
  past,
  recent,
  soon,
  weekday,
} = faker.date

// prettier-ignore
export function all({
  between   = [],    
  betweens  = [],    
  birthdate = [],    
  future    = [],    
  month     = [],    
  past      = [],    
  recent    = [],    
  soon      = [],    
  weekday   = [],    
}: {
  between?:    Parameters<typeof faker.date.between>,
  betweens?:   Parameters<typeof faker.date.betweens>,
  birthdate?:  Parameters<typeof faker.date.birthdate>,
  future?:     Parameters<typeof faker.date.future>,
  month?:      Parameters<typeof faker.date.month>,
  past?:       Parameters<typeof faker.date.past>,
  recent?:     Parameters<typeof faker.date.recent>,
  soon?:       Parameters<typeof faker.date.soon>,
  weekday?:    Parameters<typeof faker.date.weekday>,
}) {

  return {
    between:   faker.date.between(  ...between),
    betweens:  faker.date.betweens( ...betweens),
    birthdate: faker.date.birthdate(...birthdate),
    future:    faker.date.future(   ...future),
    month:     faker.date.month(    ...month),
    past:      faker.date.past(     ...past),
    recent:    faker.date.recent(   ...recent),
    soon:      faker.date.soon(     ...soon),
    weekday:   faker.date.weekday(  ...weekday),
  } 
}
