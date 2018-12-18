import snapshotDiff from 'snapshot-diff'
import { fetchFailure, fetchRequest, fetchSuccess } from './actions'
import { initialState, weatherList, weathers, WeathersState } from './reducers'

describe('reducer weathers test', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => new Date(Date.UTC(2017, 7, 9, 8)).valueOf())
  })

  const payload = {
    city: 'Tokyo'
  }

  test('shold return initial state', () => {
    expect(
      snapshotDiff(initialState, weathers(initialState, {} as any))
    ).toMatchSnapshot()
  })

  test('shold return state tokyo isFetching true', () => {
    expect(
      snapshotDiff(initialState, weathers(initialState, fetchRequest(payload)))
    ).toMatchSnapshot()
  })

  test('shold return state tokyo include data', () => {
    expect(
      snapshotDiff(
        initialState,
        weathers(
          initialState,
          fetchSuccess({
            ...payload,
            data: [{ test: 'expected value' } as any]
          })
        )
      )
    ).toMatchSnapshot()
  })

  test('shold return state tokyo isError true', () => {
    expect(
      snapshotDiff(initialState, weathers(initialState, fetchFailure(payload)))
    ).toMatchSnapshot()
  })
})

describe('reducer weatherList test', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => new Date(Date.UTC(2017, 7, 9, 8)).valueOf())
  })

  const payload = {
    city: 'Tokyo'
  }

  test('should return initial state', () => {
    expect(snapshotDiff({}, weatherList({}, {} as any))).toMatchSnapshot()
  })

  test('shold return state tokyo isFetching true', () => {
    expect(
      snapshotDiff({}, weatherList({}, fetchRequest(payload)))
    ).toMatchSnapshot()
  })

  test('shold return state tokyo include data', () => {
    expect(
      snapshotDiff(
        {},
        weatherList(
          {},
          fetchSuccess({
            ...payload,
            data: [{ test: 'expected value' } as any]
          })
        )
      )
    ).toMatchSnapshot()
  })

  test('shold return state tokyo isError true', () => {
    expect(
      snapshotDiff({}, weatherList({}, fetchFailure(payload)))
    ).toMatchSnapshot()
  })
})
