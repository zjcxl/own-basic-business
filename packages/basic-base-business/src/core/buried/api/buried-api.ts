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

export async function pagePv(query?: Partial<BuriedParams> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<BuriedPvVo>>(`${query?.requestHost || ''}/search/page/pv`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request()
}

export async function pageSt(query?: Partial<BuriedParams> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<BuriedStVo>>(`${query?.requestHost || ''}/search/page/st`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request()
}

export async function pageAe(query?: Partial<BuriedParams> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<BuriedAeVo>>(`${query?.requestHost || ''}/search/page/ae`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request()
}

export async function pageOp(query?: Partial<BuriedParams> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<BuriedOpVo>>(`${query?.requestHost || ''}/search/page/op`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request()
}

export async function pageCustom(query?: Partial<BuriedParams> | QueryObjectType) {
  return new PostRequestModel<PageResultModel<BuriedCustomVo>>(`${query?.requestHost || ''}/search/page/custom`, {
    ...DEFAULT_QUERY,
    ...query,
    requestHost: '',
  }, {
    baseUrl: BASE_URL,
  }).request()
}
