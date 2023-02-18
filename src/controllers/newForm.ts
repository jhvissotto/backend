// global
import { status } from '~/src/web'
// libs
import { is } from '~/src/libs/functions/check'
import { array, cast } from '~/src/libs/functions'
import { format } from '~/src/libs/utils/dt/format'
import { id } from '~/src/libs/utils/calc'

type OBJ = object
type TRI = boolean | null

export function newForm<
  // ========================================== //
  // ================ GENERICS ================ //
  // ========================================== //
  // // #deprecated
  // // // ======== value ======== //
  // // Value_Params = OBJ,
  // // Value_Query = OBJ,
  // // Value_Body = OBJ,
  // ======== validation ======== //
  Validation_Params = OBJ,
  Validation_Query = OBJ,
  Validation_Body = OBJ,
  // ======== output ======== //
  Props_Meta = OBJ,
  Props = OBJ,
  // ======== list ======== //
  List_Meta = OBJ,
  List_Item = OBJ,
  // ======== multiple lists ======== //
  Resources_Meta = OBJ,
  Resources = OBJ
>(
  {
    // =========================================================== //
    // ======================== ARGUMENTS ======================== //
    // =========================================================== //
    // ======== version ======== //
    res_version = 0,

    // ======== id ======== //
    // reqId_short = "",
    // reqId_v4 = "",

    // ======== current ======== //
    // date_value = 0,
    // date_full = undefined,
    // date_formated = '',

    // ======== cache ======== //
    cache_enable = null,
    cache_response = null,
    cache_duration = '',

    // ======== status ======== //
    // status_message = "",
    // status_description = "",
    status_code = NaN,
    status_flag = '',

    // // #deprecated
    // // // ======== input ======== //
    // // value_params = undefined,
    // // value_query = undefined,
    // // value_body = undefined,

    // ======== validation ======== //
    validation_params = undefined,
    validation_query = undefined,
    validation_body = undefined,
    validation_isSanitized = null,

    // ======== security ======== //
    valid_user = null,
    valid_pass = null,
    valid_credentials = null,

    user_level = NaN,
    user_levelReq = NaN,
    user_isStaff = null,
    staff_level = NaN,
    staff_levelReq = NaN,

    token_valid = null,
    token_user = '',
    token_server = '',
    token_serverDuration = '',

    apiKey_valid = null,
    apiKey_user = '',
    apiKey_server = '',

    // ======== retry ======== //
    retryNumber = 0,

    // ======== pagination ======== //
    pagined = null,
    page_key = 0,
    page_items = 0,
    page_number = 0,
    page_isLast = null,

    // ======== output ======== //
    props_meta = undefined,
    props = undefined,

    // ======== list ======== //
    list_meta = undefined,
    list = [],
    // list_length = 0,

    // list_isEmpty = null,
    // list_isFilled = null,
    // list_isZero = null,
    // list_isUnique = null,
    // list_isMany = null,

    // list_itemFirst = undefined,
    // list_itemLast = undefined,

    // ======== multiple lists ======== //
    resources_meta = undefined,
    // resources_count = 0,
    resources = undefined,

    // ======== req/res ======== //
    req_isSuccess = null,
    req_isOk = null,
    req_isError = null,
    req_hasWarns = null,

    // ======== specification ======== //
    errors_inDatabase = null,
    errors_inServices = null,

    // ======== errors ======== //
    // errors_has = null,
    errors = [],
  }: {
    // =========================================================== //
    // ======================== ARG TYPES ======================== //
    // =========================================================== //
    // ======== version ======== //
    res_version?: number

    // ======== id ======== //
    // reqId_short?: string;
    // reqId_v4?: string;

    // ======== current ======== //
    // date_value?: number;
    // date_full?: Date;
    // date_formated?: string;

    // ======== cache ======== //
    cache_enable?: TRI
    cache_response?: TRI
    cache_duration?: string

    // ======== status ======== //
    // status_message: 'Informational' | 'Successful' | 'Redirection' | 'Client Error' | 'Server Error';
    // status_description: string;
    status_code?: number
    status_flag?: 'success' | 'ok' | 'error' | ''

    // // #deprecated
    // // // ======== input ======== //
    // // value_params?: Value_Params ;
    // // value_query?: Value_Query ;
    // // value_body?: Value_Body ;

    // ======== validation ======== //
    validation_params?: Validation_Params
    validation_query?: Validation_Query
    validation_body?: Validation_Body
    validation_isSanitized?: TRI

    // ======== security ======== //
    valid_user?: TRI
    valid_pass?: TRI
    valid_credentials?: TRI

    user_level?: number
    user_levelReq?: number
    user_isStaff?: TRI
    staff_level?: number
    staff_levelReq?: number

    token_valid?: TRI
    token_user?: string
    token_server?: string
    token_serverDuration?: string

    apiKey_valid?: TRI
    apiKey_user?: string
    apiKey_server?: string

    // ======== retry ======== //
    retryNumber?: number

    // ======== pagination ======== //
    pagined?: TRI
    page_key?: number
    page_items?: number
    page_number?: number
    page_isLast?: TRI

    // ======== output ======== //
    props_meta?: Props_Meta
    props?: Props

    // ======== list ======== //
    list_meta?: List_Meta
    list?: Array<List_Item | void>
    // list_length?: number;

    // list_isEmpty?: TRI;
    // list_isFilled?: TRI;
    // list_isZero?: TRI;
    // list_isUnique?: TRI;
    // list_isMany?: TRI;

    // list_itemFirst?: List_Item ;
    // list_itemLast?: List_Item ;

    // ======== multiple lists ======== //
    resources_meta?: Resources_Meta
    // resources_count?: number;
    resources?: Resources

    // ======== req/res ======== //
    req_isSuccess?: TRI
    req_isOk?: TRI
    req_isError?: TRI
    req_hasWarns?: TRI

    // ======== specification ======== //
    errors_inDatabase?: TRI
    errors_inServices?: TRI

    // ======== errors ======== //
    // errors_has?: TRI;
    errors?: Array<Error | any>
  },
  canUpdateStatus = true
) {
  // ============================================================= //
  // ======================== AUTOMATIONS ======================== //
  // ============================================================= //
  // ======== id ======== //
  const reqId_short = id.short()
  const reqId_v4 = id.v4()

  // ======== current ======== //
  const date_value = Date.now()
  const date_full = new Date()
  const date_formated = format(date_full, 'yyyy-MM-dd  HH:mm:ss')

  // ======== error update ======== //
  if (canUpdateStatus) {
    if (
      status_code >= 400 ||
      status_flag == 'error' ||
      req_isError ||
      errors_inDatabase ||
      errors_inServices ||
      errors?.length
    ) {
      status_code = status_code || 400
      status_flag = status_flag || 'error'
      req_isSuccess = is.filled(req_isSuccess) ? req_isSuccess : false
      req_isOk = is.filled(req_isOk) ? req_isOk : false
      req_isError = is.filled(req_isError) ? req_isError : true
    } else {
      status_code = status_code || 200
      status_flag = status_flag || 'success'
      req_isSuccess = is.filled(req_isSuccess) ? req_isSuccess : true
      req_isOk = is.filled(req_isOk) ? req_isOk : true
      req_isError = is.filled(req_isError) ? req_isError : false
    }
  }

  // ======== status list ======== //
  const status_message = status?.[status_code]?.message || ''
  const status_description = status?.[status_code]?.description || ''

  // ======== counters ======== //
  const list_length = list?.length ?? 0
  const resources_count = Object?.entries?.({ ...resources })?.length ?? 0
  const errors_has = cast.boolean(errors?.length)

  // ======== list parser ======== //
  const {
    isEmpty: list_isEmpty,
    isFilled: list_isFilled,
    isZero: list_isZero,
    isUnique: list_isUnique,
    isMany: list_isMany,
    itemFirst: list_itemFirst,
    itemLast: list_itemLast,
  } = array.parse(list)

  // ======================================================== //
  // ======================== RETURN ======================== //
  // ======================================================== //
  return {
    // ======== version ======== //
    res_version,

    // ======== id ======== //
    reqId_short,
    reqId_v4,

    // ======== current ======== //
    date_value,
    date_full,
    date_formated,

    // ======== cache ======== //
    cache_enable,
    cache_response,
    cache_duration,

    // ======== status ======== //
    status_message,
    status_description,
    status_code,
    status_flag,

    // // #deprecated
    // // // ======== input ======== //
    // // value_params,
    // // value_query,
    // // value_body,

    // ======== validation ======== //
    validation_params,
    validation_query,
    validation_body,
    validation_isSanitized,

    // ======== security ======== //
    valid_user,
    valid_pass,
    valid_credentials,

    user_level,
    user_levelReq,
    user_isStaff,
    staff_level,
    staff_levelReq,

    token_valid,
    token_user,
    token_server,
    token_serverDuration,

    apiKey_valid,
    apiKey_user,
    apiKey_server,

    // ======== retry ======== //
    retryNumber,

    // ======== pagination ======== //
    pagined,
    page_key,
    page_items,
    page_number,
    page_isLast,

    // ======== output ======== //
    props_meta: props_meta,
    props: props,

    // ======== list ======== //
    list_meta: list_meta,
    list,
    list_length,

    list_isEmpty,
    list_isFilled,
    list_isZero,
    list_isUnique,
    list_isMany,

    list_itemFirst,
    list_itemLast,

    // ======== multiple lists ======== //
    resources_meta: resources_meta,
    resources_count,
    resources: resources,

    // ======== req/res ======== //
    req_isSuccess,
    req_isOk,
    req_isError,
    req_hasWarns,

    // ======== specification ======== //
    errors_inDatabase,
    errors_inServices,

    // ======== errors ======== //
    errors_has,
    errors,
  }
}
