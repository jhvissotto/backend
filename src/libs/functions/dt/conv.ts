// prettier-ignore
export function conv({ yr = 0, mo = 0, day = 0, hr = 0, min = 0, sec = 0, ms = 0 }) {

    const toMs = {
        yr:  1*12*30 * 24*60*60 * 1000,
        mo:     1*30 * 24*60*60 * 1000,
        day:       1 * 24*60*60 * 1000,

        hr:             1*60*60 * 1000,
        min:               1*60 * 1000,
        sec:                  1 * 1000,
        ms:                          1,
    }


    const inMs
        = yr  * toMs.yr 
        + mo  * toMs.mo 
        + day * toMs.day

        + hr  * toMs.hr
        + min * toMs.min
        + sec * toMs.sec
        + ms  * toMs.ms


    const conv = {
        yr:  inMs / toMs.yr,
        mo:  inMs / toMs.mo,
        day: inMs / toMs.day,

        hr:  inMs / toMs.hr,
        min: inMs / toMs.min,
        sec: inMs / toMs.sec,
        ms:  inMs / toMs.ms,
    }

    return conv
}
