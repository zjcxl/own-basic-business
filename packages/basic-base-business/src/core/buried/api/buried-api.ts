import {
  PostRequestModel,
} from '@own-basic-component/request'
import type { PageResultModel, QueryObjectType } from '@own-basic-component/config'
import type {
  BuriedAeVo,
  BuriedCustomVo,
  BuriedOpVo,
  BuriedPvVo,
  BuriedStVo,
} from '../entity'

const BASE_URL = '/buriedapi'

const DEFAULT_QUERY: Record<string, string> = {
  appKey: 'bobaoge',
}

interface BuriedParams {
  requestHost: string
}

export default {

  pagePv: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageResultModel<BuriedPvVo>>(`${query?.requestHost || ''}/search/page/pv`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageSt: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageResultModel<BuriedStVo>>(`${query?.requestHost || ''}/search/page/st`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageAe: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageResultModel<BuriedAeVo>>(`${query?.requestHost || ''}/search/page/ae`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageOp: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageResultModel<BuriedOpVo>>(`${query?.requestHost || ''}/search/page/op`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageCustom: (query?: QueryObjectType & BuriedParams) => new PostRequestModel<PageResultModel<BuriedCustomVo>>(`${query?.requestHost || ''}/search/page/custom`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

}
