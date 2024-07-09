/**
 * 解析请求头中的参数信息
 * @param headerParams
 */
export function resolveOperationHeader(headerParams: string): OperationHeaderInfo {
  try {
    const header = JSON.parse(headerParams) as Record<string, string>
    return {
      deviceId: header['device-id'] || '',
      platform: header.platform || '',
      deviceName: header['device-name'] || '',
      systemName: header['system-name'] || '',
      systemVersion: header['system-version'] || '',
      deviceDetailName: header['device-detail-name'] || '',
    }
  }
  catch (e) {
    return {}
  }
}

export interface OperationHeaderInfo {
  /**
   * 设备厂商名称
   */
  deviceName?: string
  /**
   * 系统名称
   */
  systemName?: string
  /**
   * 系统版本
   */
  systemVersion?: string
  /**
   * 设备详细名称（型号）
   */
  deviceDetailName?: string
  /**
   * 设备id
   */
  deviceId?: string
  /**
   * 安装包来源平台
   */
  platform?: string
}
