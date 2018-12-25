import axios from 'axios'
import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import thunk from 'redux-thunk'
import { SWITCH_CITY } from '../store/currentCity'
import { IWetherListState } from '../store/weatherList'
import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS
} from '../store/weatherList'
import { Nav } from './Nav'

describe('Nav container test', () => {
  interface IProps {
    cityList: string[]
    onSubmit: (text: string) => void
  }
  let store: MockStoreEnhanced
  let wrapper: ShallowWrapper<IProps>

  const initialState = {
    // ...currentCityInitialState,
    weatherList: {
      Tokyo: {
        isError: false,
        isFetching: false,
        lastUpdateAt: null,
        list: []
      }
    } as IWetherListState
  }

  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore(initialState)
    wrapper = shallow(<Nav store={store} />)
  })

  test('Should map state to props', () => {
    expect(wrapper.props().cityList[0]).toBe('Tokyo')
  })

  test('shold Dispatch fetch success action', async () => {
    store.dispatch = jest.fn()
    const res = { data: { list: [] } }
    axios.get = jest.fn(() => Promise.resolve(res))
    const city = 'Osaka'
    await wrapper.props().onSubmit(city)
    expect(store.getActions()).toMatchObject([
      { type: FETCH_REQUEST, payload: { city } },
      { type: FETCH_SUCCESS, payload: { city, data: res.data.list } },
      { type: SWITCH_CITY, payload: { city } }
    ])
  })

  test('shold Dispatch fetch failure action', async () => {
    store.dispatch = jest.fn()
    const res = { data: { list: [] } }
    axios.get = jest.fn(() => Promise.reject())
    const city = 'Osaka'
    await wrapper.props().onSubmit(city)
    expect(store.getActions()).toMatchObject([
      { type: FETCH_REQUEST, payload: { city } },
      { type: FETCH_FAILURE, payload: { city } },
      { type: SWITCH_CITY, payload: { city } }
    ])
  })
})
