// prettier-ignore
export type COMMAND = 'SELECT' | 'INSERT' | 'UPSERT' | 'UPDATE' | 'DELETE'
export type COUNT = '' | 'ALL' | 'ONE' | 'MANY'
export type Table = string
export type KEY = '' | 'PK' | 'SLUG'

export type PK = number | string
export type Slug = number | string

export type Items = number
export type Page = number

export type Langs = '' | 'en' | 'fr' | 'es' | 'pt' | 'it'
