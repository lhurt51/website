import React, { Component } from 'react'
import { Header } from './HeaderComponents/Header'
import { Homepage } from './HomeComponents/Homepage'
import { Footer } from './Footer'
import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  header {
    border: 8px solid #ff6347;
  }
  main {
    border: 8px solid #568f56;
  }
  footer {
    border: 8px solid #24248f;
  }
  img {
    height: 75px;
  }
`

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Homepage />
        <Footer />
      </Container>
    )
  }
}

export default App
