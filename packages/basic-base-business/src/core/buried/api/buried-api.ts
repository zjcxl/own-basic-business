import {
  PostRequestModel,
} from '@own-basic-component/request'
import type { QueryObjectType } from '@own-basic-component/config'
import type {
  BuriedAeVo,
  BuriedCustomVo,
  BuriedOpVo,
  BuriedPvVo,
  BuriedStVo,
} from '../entity'
import type { PageModel } from '../../../base'

const BASE_URL = '/buriedapi'

const DEFAULT_QUERY: Record<string, string> = {
  appKey: 'bobaoge',
}

interface BuriedParams {
  requestHost: string
}

export default {

  pagePv: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageModel<BuriedPvVo>>(`${query?.requestHost || ''}/search/page/pv`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageSt: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageModel<BuriedStVo>>(`${query?.requestHost || ''}/search/page/st`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageAe: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageModel<BuriedAeVo>>(`${query?.requestHost || ''}/search/page/ae`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageOp: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageModel<BuriedOpVo>>(`${query?.requestHost || ''}/search/page/op`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageCustom: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageModel<BuriedCustomVo>>(`${query?.requestHost || ''}/search/page/custom`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

}
