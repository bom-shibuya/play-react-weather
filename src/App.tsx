import React from 'react'
import styled from 'styled-components'

import { DisplayData, Nav } from './containers'

const Wrapper = styled.div`
  display: flex;
`

const LNav = styled.div`
  width: 24rem;
`

const LContent = styled.div`
  width: calc(100% - 24rem);
`

export const App: React.SFC = () => (
  <Wrapper>
    <LNav>
      <Nav />
    </LNav>
    <LContent>
      <DisplayData />
    </LContent>
  </Wrapper>
)
