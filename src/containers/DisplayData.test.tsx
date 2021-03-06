import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import thunk from 'redux-thunk'
import { WeathersState } from '../store/weatherList'
import { IRootState } from '../types'
import { DisplayData } from './DisplayData'

describe('DisplayData container test', () => {
  const weathersState: WeathersState = {
    isError: false,
    isFetching: false,
    lastUpdateAt: 1545727291732,
    list: []
  }
  const initialState: IRootState = {
    currentCity: 'Tokyo',
    weatherList: {
      Tokyo: weathersState
    }
  }

  interface IProps {
    cityName: string
    weathersState: WeathersState
  }

  let store: MockStoreEnhanced
  let wrapper: ShallowWrapper<IProps>

  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore(initialState)
    wrapper = shallow(<DisplayData store={store} />)
  })

  test('should recieve cityName', () => {
    expect(wrapper.props().cityName).toBe('Tokyo')
  })

  test('should recieve weathersState', () => {
    expect(wrapper.props().weathersState).toMatchObject(weathersState)
  })
})
