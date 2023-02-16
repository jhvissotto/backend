export module Args {
  // prettier-ignore
  // export type COMMAND = 'SELECT' | 'INSERT' | 'UPSERT' | 'UPDATE' | 'DELETE'
  export type GET = '' | 'ALL' | 'ONE' | 'MANY'

  export type TblKey = 'td' | 'tr' | 'tv' | 'tf' | 'tp' | 'tn' | 'tm' | 'tj' | 'tq' | 'tb'
  export type FldKey = 'id' | 'pk' | 'fk' | 'slug' | 'rn'

  export type Table = string
  export type Field = string

  export type Join = '' | 'LEFT' | 'RIGHT'
  export type Steps = '1' | '2'

  //

  export type BY = 'PK' | 'SLUG' // | 'RN'
  export type Langs = '' | 'en' | 'fr' | 'es' | 'pt' | 'it'

  export type PK = number | string
  export type Slug = string
  export type RN = number

  //

  export type Many = number
  export type Items = number
  export type Page = number

  //

  export type Dir = 'ASC' | 'DESC'

  export type PriorityU = Field
  export type PriorityD = [Field, Dir]

  export type prioritiesU = PriorityU[]
  export type PrioritiesD = PriorityD[]

  //

  export type RandKey = number | string

  export type Sort =
    | ''
    | 'OMIT'
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
    // byPost
    | 'COUNT_VIEWS'
    | 'COUNT_LIKES'
    // byUser, byTag
    | 'COUNT_POSTS'
    | 'COUNT_USERS'
    // byUser, byTag
    | 'TOTAL_VIEWS'
    | 'TOTAL_LIKES'
    // byUser, byTag
    | 'AVG_VIEWS'
    | 'AVG_LIKES'
}
