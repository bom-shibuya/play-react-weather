import axios from 'axios'
import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import thunk from 'redux-thunk'
import { DisplayDataContents, IProps } from './DisplayDataContents'

describe('DisplayDataContents component test', () => {
  const res = { data: { list: [] } }
  const dispatch = jest.fn()
  let wrapper: ShallowWrapper<IProps>
  let store: MockStoreEnhanced

  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore()
    const props: IProps = {
      cityName: 'Tokyo',
      dispatch: store.dispatch,
      weathersState: {
        isError: false,
        isFetching: false,
        lastUpdateAt: null,
        list: []
      }
    }
    wrapper = shallow(<DisplayDataContents {...props} />)
    store.clearActions()
  })
  test('component did mount should called dispatch with expected arguments', async () => {
    axios.get = jest.fn(() => Promise.resolve(res))

    await wrapper.instance().componentDidMount()
    expect(store.getActions()).toMatchSnapshot()
  })
})
