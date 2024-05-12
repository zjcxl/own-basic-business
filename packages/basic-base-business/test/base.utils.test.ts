import { describe, expect, it } from 'vitest'
import { resolveForDay, resolveForSecond } from '../src/base/utils'

describe('completion-time-range', () => {
  it('resolveForSecond', () => {
    const array = resolveForSecond(
      new Date(2024, 0, 1, 0, 0, 0),
      new Date(2024, 0, 1, 0, 0, 10),
    )
    expect(JSON.stringify(array)).equals(`["2024-01-01 00:00:00","2024-01-01 00:00:01","2024-01-01 00:00:02","2024-01-01 00:00:03","2024-01-01 00:00:04","2024-01-01 00:00:05","2024-01-01 00:00:06","2024-01-01 00:00:07","2024-01-01 00:00:08","2024-01-01 00:00:09","2024-01-01 00:00:10"]`, 'resolveForSecond')
  })

  it('resolveForDay', () => {
    const array = resolveForDay(
      new Date(2024, 0, 1, 0, 0, 0),
      new Date(2024, 0, 3, 0, 0, 0),
    )
    expect(JSON.stringify(array)).equals(`["2024-01-01","2024-01-02","2024-01-03"]`, 'resolveForDay')
  })
})
