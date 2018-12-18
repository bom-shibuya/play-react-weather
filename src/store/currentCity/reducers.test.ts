import snapshotDiff from 'snapshot-diff'
import { switchCity } from './actions'
import { currentCity, initialState } from './reducers'

describe('currentCity reducer test', () => {
  test('Reducer return initial state', () => {
    expect(
      snapshotDiff(initialState, currentCity(initialState, {} as any))
    ).toMatchSnapshot()
  })

  test('Reducer return state currentCity => "Osaka"', () => {
    expect(
      snapshotDiff(
        initialState,
        currentCity(initialState, switchCity({ city: 'Osaka' }))
      )
    ).toMatchSnapshot()
  })
})
