export interface BuriedVo {
  /**
   * 标识id
   */
  id: string
  /**
   * 类型 pv ae st
   */
  type: string
  /**
   * ip地址
   */
  ip: string
  /**
   * 创建时间
   */
  time: string
  /**
   * 应用key
   */
  appKey: string
  /**
   * 用户id
   */
  userId: string
  /**
   * 用户名称
   */
  userName: string
  /**
   * 来源
   */
  origin: string
  /**
   * 页面路径
   */
  pathname: string
  /**
   * 页面标题
   */
  pageTitle: string
  /**
   * 语言
   */
  language: string
  /**
   * 时区
   */
  timeZone: string
  /**
   * 时区偏移
   */
  timeZoneOffset: string
  /**
   * 页面宽度
   */
  width: number
  /**
   * 页面高度
   */
  height: number
  /**
   * 设备信息
   */
  devicePixelRatio: string
  /**
   * 浏览器信息
   */
  userAgent: string
  /**
   * 网络信息
   */
  online: string
  /**
   * 屏幕信息
   */
  screen: string
  /**
   * 浏览器名称
   */
  bowserName: string
  /**
   * 浏览器版本号
   */
  bowserVersion: string
  /**
   * 操作系统名称
   */
  bowserOsFamily: string
  /**
   * 操作系统版本号
   */
  bowserOsVersion: string
  /**
   * 设备类型
   */
  bowserDeviceType: string
  /**
   * 地理位置
   */
  point: Record<string, string>
  /**
   * 扩展信息
   */
  extra: Record<string, string>
  /**
   * 请求头
   */
  header: Record<string, string>
}

export interface BuriedPvVo extends BuriedVo {

}

export interface BuriedCustomVo extends BuriedVo {

}

export interface BuriedAeVo extends BuriedVo {
  /**
   * 按钮名称
   */
  actionName: string
  /**
   * 操作事件
   */
  actionType: string
}

export interface BuriedOpVo extends BuriedVo {
  /**
   * 事件名称
   */
  actionName: string
}

export interface BuriedStVo extends BuriedVo {
  /**
   * 停留时间(ms)
   */
  stayTime: number
  /**
   * 来源地址
   */
  fromPagePath: string
  /**
   * 来源名称
   */
  fromPageName: string
  /**
   * 目的地址
   */
  toPagePath: string
  /**
   * 目的名称
   */
  toPageName: string
}
