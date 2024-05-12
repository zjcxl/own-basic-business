import { format } from 'date-fns'
import type { TypeInterval } from '../constant'

/**
 * 根据时间统计范围解析时间范围
 *
 * @param interval  时间统计范围
 * @param startTime 开始时间
 * @param endTime   结束时间
 * @return 时间范围
 */
export function resolve(interval: TypeInterval, startTime: Date, endTime: Date): Array<string> {
  switch (interval) {
    case 'second': {
      return resolveForSecond(startTime, endTime)
    }
    case 'minute' :{
      return resolveForMinute(startTime, endTime)
    }
    case 'hour': {
      return resolveForHour(startTime, endTime)
    }
    case 'day': {
      return resolveForDay(startTime, endTime)
    }
    case 'month': {
      return resolveForMonth(startTime, endTime)
    }
    case 'year' : {
      resolveForYear(startTime, endTime)
    }
  }
  throw new Error(`Unsupported interval: ${interval}`)
}

/**
 * 根据开始时间和结束时间获取时间范围
 *
 * @param startTime 开始时间
 * @param endTime   结束时间
 * @return 时间范围
 */
export function resolveForSecond(startTime: Date, endTime: Date): Array<string> {
  return buildArray(
    startTime,
    endTime,
    date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()),
    date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()),
    'yyyy-MM-dd HH:mm:ss',
    1000,
  )
}

/**
 * 根据开始时间和结束时间获取时间范围
 *
 * @param startTime 开始时间
 * @param endTime   结束时间
 * @return 时间范围
 */
export function resolveForMinute(startTime: Date, endTime: Date): Array<string> {
  return buildArray(
    startTime,
    endTime,
    date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()),
    date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()),
    'yyyy-MM-dd HH:mm',
    60000,
  )
}

/**
 * 根据开始时间和结束时间获取时间范围
 *
 * @param startTime 开始时间
 * @param endTime   结束时间
 * @return 时间范围
 */
export function resolveForHour(startTime: Date, endTime: Date): Array<string> {
  return buildArray(
    startTime,
    endTime,
    date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()),
    date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()),
    'yyyy-MM-dd HH',
    3600000,
  )
}

/**
 * 根据开始时间和结束时间获取时间范围
 *
 * @param startTime 开始时间
 * @param endTime   结束时间
 * @return 时间范围
 */
export function resolveForDay(startTime: Date, endTime: Date): Array<string> {
  return buildArray(
    startTime,
    endTime,
    date => new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    date => new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    'yyyy-MM-dd',
    86400000,
  )
}

/**
 * 根据开始时间和结束时间获取时间范围
 *
 * @param startTime 开始时间
 * @param endTime   结束时间
 * @return 时间范围
 */
export function resolveForMonth(startTime: Date, endTime: Date): Array<string> {
  return buildArray(
    startTime,
    endTime,
    date => new Date(date.getFullYear(), date.getMonth(), 1),
    date => new Date(date.getFullYear(), date.getMonth() + 1),
    'yyyy-MM',
    2592000000,
  )
}

/**
 * 根据开始时间和结束时间获取时间范围
 *
 * @param startTime 开始时间
 * @param endTime   结束时间
 * @return 时间范围
 */
export function resolveForYear(startTime: Date, endTime: Date): Array<string> {
  return buildArray(
    startTime,
    endTime,
    date => new Date(date.getFullYear(), 0, 1, 0, 0, 0),
    date => new Date(date.getFullYear(), 11, 31, 0, 0, 0),
    'yyyy',
    31536000000,
  )
}

/**
 * 根据开始时间和结束时间获取时间范围
 * @param startTime 开始时间
 * @param endTime  结束时间
 * @param startHandler 开始时间处理器
 * @param endHandler 结束时间处理器
 * @param formatStr 格式化字符串
 * @param duration 间隔时间
 */
function buildArray(
  startTime: Date,
  endTime: Date,
  startHandler: (date: Date) => Date,
  endHandler: (date: Date) => Date,
  formatStr: string,
  duration: number,
) {
  const startTimestamp = startTime.getTime()
  let endTimestamp = endTime.getTime()
  if (endTimestamp < startTimestamp)
    throw new Error('endTime must be after startTime')
  const array: string[] = []
  let tempStartTime = startHandler(startTime).getTime()
  endTimestamp = endHandler(endTime).getTime()
  do {
    array.push(format(tempStartTime, formatStr))
    tempStartTime += duration
  } while (tempStartTime <= endTimestamp)
  return array
}
