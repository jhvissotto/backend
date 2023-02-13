import moment from 'moment'

export function getAgeFromBithDate(birthDate: Date) {
  return moment().diff(moment(birthDate), 'years')
}
