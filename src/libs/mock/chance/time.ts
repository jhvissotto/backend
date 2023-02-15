import { chance } from '.'

export const sample = {
  ampm: 'am',
  hammertime: 3703714893757,
  hour: 1,
  millisecond: 70,
  minute: 42,
  second: 28,
  timestamp: 1531751741,
  timezone: {
    name: 'SA Pacific Standard Time',
    abbr: 'SPST',
    offset: -5,
    isdst: false,
    text: '(UTC-05:00) Bogota, Lima, Quito',
    utc: [
      'America/Bogota',
      'America/Cayman',
      'America/Coral_Harbour',
      'America/Eirunepe',
      'America/Guayaquil',
      'America/Jamaica',
      'America/Lima',
      'America/Panama',
      'America/Rio_Branco',
      'Etc/GMT+5',
    ],
  },
  year: '2069',
}

// prettier-ignore
export const {
  ampm,
  date,
  hammertime,
  hour,
  millisecond,
  minute,
  month,
  second,
  timestamp,
  timezone,
  weekday,
  year,
} = chance

// prettier-ignore
export function all({
  ampm        = [],
  // date        = [],
  hammertime  = [],
  hour        = [],
  millisecond = [],
  minute      = [],
  // month       = [],
  second      = [],
  timestamp   = [],
  timezone    = [],
  // weekday     = [],
  year        = [],
}: {
  ampm?:         Parameters<typeof chance.ampm>,
  // date:          Parameters<typeof chance.date>,
  hammertime?:   Parameters<typeof chance.hammertime>,
  hour?:         Parameters<typeof chance.hour>,
  millisecond?:  Parameters<typeof chance.millisecond>,
  minute?:       Parameters<typeof chance.minute>,
  // month:         Parameters<typeof chance.month>,
  second?:       Parameters<typeof chance.second>,
  timestamp?:    Parameters<typeof chance.timestamp>,
  timezone?:     Parameters<typeof chance.timezone>,
  // weekday:       Parameters<typeof chance.weekday>,
  year?:         Parameters<typeof chance.year>,
}) {

  return {
    ampm:         chance.ampm(        ...ampm),
    // date:         chance.date(        ...date),
    hammertime:   chance.hammertime(  ...hammertime),
    hour:         chance.hour(        ...hour),
    millisecond:  chance.millisecond( ...millisecond),
    minute:       chance.minute(      ...minute),
    // month:        chance.month(       ...month),
    second:       chance.second(      ...second),
    timestamp:    chance.timestamp(   ...timestamp),
    timezone:     chance.timezone(    ...timezone),
    // weekday:      chance.weekday(     ...weekday),
    year:         chance.year(        ...year),
  } 
}
