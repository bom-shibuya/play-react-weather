import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
// import { Provider } from 'react-redux'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import thunk from 'redux-thunk'
import { IWetherListState } from '../store/weatherList'
// import { initialState as currentCityInitialState } from '../store/currentCity'
import { Nav } from './Nav'

describe('Nav container test', () => {
  let store: MockStoreEnhanced
  let wrapper: ShallowWrapper

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

    // const context = React.createContext(initialState)
    wrapper = shallow(<Nav store={store} />)
  })

  test('Should map state to props', () => {
    expect(wrapper.props().cityList[0]).toBe('Tokyo')
    console.log(wrapper.props())
  })
})
