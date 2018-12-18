import { SWITCH_CITY, switchCity } from './actions'

describe('currentCity action test', () => {
  test('Should return expected action', () => {
    const payload = { city: 'Tokyo' }
    expect(switchCity(payload)).toMatchObject({
      payload,
      type: SWITCH_CITY
    })
  })
})
