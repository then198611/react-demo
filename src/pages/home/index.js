import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'

class Home extends React.Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <Topic />
        </HomeLeft>
        <HomeRight>right</HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home
