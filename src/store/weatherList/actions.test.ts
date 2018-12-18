import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  fetchFailure,
  fetchRequest,
  fetchSuccess
} from './actions'

describe('weatherList action test', () => {
  const payload = {
    city: 'Tokyo'
  }

  test('fetchRequest shold return expected action', () => {
    expect(fetchRequest(payload)).toMatchObject({
      payload,
      type: FETCH_REQUEST
    })
  })

  test('fetchSuccess shold return expected action', () => {
    const payloadForSuccess = {
      ...payload,
      data: []
    }
    expect(fetchSuccess(payloadForSuccess)).toMatchObject({
      payload: payloadForSuccess,
      type: FETCH_SUCCESS
    })
  })

  test('fetchFailure shold return expected action', () => {
    expect(fetchFailure(payload)).toMatchObject({
      payload,
      type: FETCH_FAILURE
    })
  })
})
