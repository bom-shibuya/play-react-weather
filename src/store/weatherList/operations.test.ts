import axios from 'axios'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import thunk from 'redux-thunk'
import { AsyncDispatch } from '../../types'
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from './actions'
import { fetchWeather } from './operations'

describe('weatherList oparation test', () => {
  let store: MockStoreEnhanced
  const payload = {
    city: 'Tokyo'
  }
  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore()
  })

  test('If fetch is success, call expected actions', () => {
    const res = { data: { list: [] } }
    axios.get = jest.fn(() => Promise.resolve(res))
    const dispatch: AsyncDispatch = store.dispatch
    dispatch(fetchWeather(payload)).then(() => {
      const expectedActions = [
        { payload, type: FETCH_REQUEST },
        {
          payload: {
            ...payload,
            data: res.data.list
          },
          type: FETCH_SUCCESS
        }
      ]
      expect(store.getActions()).toMatchObject(expectedActions)
    })
  })

  test('If fetch is success, call expected actions', () => {
    axios.get = jest.fn(() => Promise.reject())
    const dispatch: AsyncDispatch = store.dispatch
    dispatch(fetchWeather(payload)).then(() => {
      const expectedActions = [
        { payload, type: FETCH_REQUEST },
        { payload, type: FETCH_FAILURE }
      ]
      expect(store.getActions()).toMatchObject(expectedActions)
    })
  })
})
