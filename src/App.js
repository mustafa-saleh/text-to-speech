/**@jsx jsx */
import {jsx} from '@emotion/react'

import {Container} from 'components/lib'
import Header from 'sections/header'
import Footer from 'sections/footer'
import Main from 'sections/main'
import DatePickr, {BaseFun} from 'sections/date-picker'

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <DatePickr />
      <BaseFun />
      <Footer />
    </Container>
  )
}

export default App
