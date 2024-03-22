import { useState } from 'react'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../css/GlobalStyle'

import styled from 'styled-components'
import theme from '../css/theme'
import Header from './Header'
import Main from './Main'
import Category from './Category'

import '../css/App.css'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      
      <GlobalStyle/>
      
      <Header/>
      <Main/>

    </ThemeProvider>
      
    </>
  )
}

export default App
