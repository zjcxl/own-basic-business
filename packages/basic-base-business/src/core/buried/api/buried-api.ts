import {
  PostRequestModel,
} from '@own-basic-component/request'
import type { QueryType } from '@own-basic-component/config'
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

export default {

  pagePv: (query: QueryType) => new PostRequestModel<PageModel<BuriedPvVo>>(`${query.requestHost || ''}/search/page/pv`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageSt: (query: QueryType) => new PostRequestModel<PageModel<BuriedStVo>>(`${query.requestHost || ''}/search/page/st`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageAe: (query: QueryType) => new PostRequestModel<PageModel<BuriedAeVo>>(`${query.requestHost || ''}/search/page/ae`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageOp: (query: QueryType) => new PostRequestModel<PageModel<BuriedOpVo>>(`${query.requestHost || ''}/search/page/op`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

  pageCustom: (query: QueryType) => new PostRequestModel<PageModel<BuriedCustomVo>>(`${query.requestHost || ''}/search/page/custom`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request(),

}
