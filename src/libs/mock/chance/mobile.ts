import { chance } from '.'

export const mobile = {
  android_id:
    'APA91KNZ6O-HjB2i2QG-r_Sgv6c-eNRw1SG8NOoLhQS-z_gSMfb-MCJMhYijHIbsZ-iIYc4eNZkZOCtEFaHScb9iOPn3Kk2xG4-WQHLS7wGgcatWKQI42WEXmTv1aIieQ0xiKbtxlQY_yntY6jJzDMZshElPNkKfDnAY1Jv6HCgP7b3skxIy4YB',
  apple_token: 'b8d6d1216864095755db622156a1a58fb04b37548b621d7a7eb5fc5c6b74ab93',
  bb_pin: 'f1646e2e',
  wp7_anid: 'A=74178DA5DE885FAB90D551F4E8DF22E5&E=031&W=6',
  wp8_anid2: 'N2UzMjFkZWE4M2QzYWJkMmVjYzdiNmY2YzI5MGFlNDI=',
}

// prettier-ignore
export const {
  android_id,
  apple_token,
  bb_pin,
  wp7_anid,
  wp8_anid2,
} = chance

// prettier-ignore
export function all({
  android_id    = [],
  apple_token   = [],
  bb_pin        = [],
  wp7_anid      = [],
  wp8_anid2     = [],
}: {
  android_id?:   Parameters<typeof chance.android_id>,
  apple_token?:  Parameters<typeof chance.apple_token>,
  bb_pin?:       Parameters<typeof chance.bb_pin>,
  wp7_anid?:     Parameters<typeof chance.wp7_anid>,
  wp8_anid2?:    Parameters<typeof chance.wp8_anid2>,
}) {

  return {
    android_id:   chance.android_id(  ...android_id),
    apple_token:  chance.apple_token( ...apple_token),
    bb_pin:       chance.bb_pin(      ...bb_pin),
    wp7_anid:     chance.wp7_anid(    ...wp7_anid),
    wp8_anid2:    chance.wp8_anid2(   ...wp8_anid2),
  } 
}
