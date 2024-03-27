import { DeleteRequestModel, GetRequestModel, PostRequestModel } from '@own-basic-component/request'
import type { SystemUserInfoVo } from '../entity'

export default {

  /**
   * 登录接口
   * @param account 账号
   * @param password 加密后的密码
   * @param key 加密秘钥
   * @param clientId 客户端id
   * @param type 账号类型
   */
  login: (
    account: string,
    password: string,
    key?: string,
    clientId?: string,
    type?: number,
  ) => new PostRequestModel<string>('/login/', { account, password, key, clientId, type }).request(),

  /**
   * 退出登录
   */
  loginOut: () => new DeleteRequestModel('/login/').request(),

  /**
   * 获取当前登录用户的信息
   */
  info: <T = {
    info: SystemUserInfoVo
    [key: string]: any
  }>() => new GetRequestModel<T>('/login/').request(),

  /**
   * 验证是否登录
   */
  check: () => new GetRequestModel<boolean>('/login/check').request(),

  /**
   * 获取rsa公钥
   * @param sign 签名
   */
  rsa: (sign: string) => new GetRequestModel<string>(`/login/key/${sign}`).request(),

  /**
   * 获取自动登录的key
   */
  getAutoLoginKey: () => new PostRequestModel<string>('/login/auto/key').request(),

  /**
   * 自动登录接口
   * @param password 加密后的密码
   * @param key 加密秘钥
   * @param clientId 客户端id
   */
  autoLogin: (password: string, key: string, clientId?: string) => new PostRequestModel<string>('/login/auto', { password, key, clientId }).request(),

}
