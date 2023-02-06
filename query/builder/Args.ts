export module Args {
  // prettier-ignore
  // export type COMMAND = 'SELECT' | 'INSERT' | 'UPSERT' | 'UPDATE' | 'DELETE'
  // export type GET = '' | 'ALL' | 'ONE' | 'MANY'

  export type TblKey = 'tv' | 'td' | 'tr' | 'tn' | 'tb'
  export type FldKey = 'id' | 'pk' | 'fk' | 'slug' | 'rn'

  export type Table = string
  export type Field = string

  //

  export type BY = 'PK' | 'SLUG' | 'RN'
  export type Langs = '' | 'en' | 'fr' | 'es' | 'pt' | 'it'

  export type PK = number | string
  export type Slug = string
  export type RN = number

  //

  export type Items = number
  export type Page = number

  export type RandKey = number | string

  export type Sort =
    // ======== ARBITRARY ======== //
    | 'SORT_NUMBER'
    // ======== RANDOM ======== //
    | 'RANDOM'
    | 'WEIGHT_RAND'
    // ======== ALPHABETICAL ======== //
    | 'NAME_AZ'
    | 'NAME_ZA'
    | 'TITLE_AZ'
    | 'TITLE_ZA'
    // ======== DATE ======== //
    | 'LAST_UPDATE'
    | 'NEWEST'
    | 'OLDEST'
    // ======== STATS ======== //
    | 'COUNT_VIEWS'
    | 'COUNT_POSTS'
    | 'COUNT_SUBS'
    | 'TOTAL_VIEWS'
    | 'TOTAL_POSTS'
    | 'AVG_VIEWS_TO_POST'
}
