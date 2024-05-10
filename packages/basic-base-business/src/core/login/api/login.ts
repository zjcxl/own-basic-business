import { DeleteRequestModel, GetRequestModel, PostRequestModel } from '@own-basic-component/request'
import type { AdvancedSystemUserInfoVo } from '../../user'

/**
 * 登录接口
 * @param account 账号
 * @param password 加密后的密码
 * @param key 加密秘钥
 * @param clientId 客户端id
 * @param type 账号类型
 */
export async function login(
  account: string,
  password: string,
  key?: string,
  clientId?: string,
  type?: number,
) {
  return new PostRequestModel<string>('/login/', { account, password, key, clientId, type }).request()
}

/**
 * 退出登录
 */
export async function loginOut() {
  return new DeleteRequestModel('/login/').request()
}

/**
 * 获取当前登录用户的信息
 */
export async function info<T = AdvancedSystemUserInfoVo>() {
  return new GetRequestModel<T>('/login/').request()
}

/**
 * 验证是否登录
 */
export async function check() {
  return new GetRequestModel<boolean>('/login/check').request()
}

/**
 * 获取rsa公钥
 * @param sign 签名
 */
export async function rsa(sign: string) {
  return new GetRequestModel<string>(`/login/key/${sign}`).request()
}

/**
 * 获取自动登录的key
 */
export async function getAutoLoginKey() {
  return new PostRequestModel<string>('/login/auto/key').request()
}

/**
 * 自动登录接口
 * @param password 加密后的密码
 * @param key 加密秘钥
 * @param clientId 客户端id
 */
export async function autoLogin(password: string, key: string, clientId?: string) {
  return new PostRequestModel<string>('/login/auto', { password, key, clientId }).request()
}
