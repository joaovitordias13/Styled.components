import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './styles'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <div>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </div>
  )
}

export default App
