import { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import UseContext from './UseContext'
import traductor from './translate'
import { Menu } from './Menu'
import Footer from './pages/Footer'

function App() {
  const [idioma, setIdioma] = useState(0)
  const traduce = (etiqueta) => traductor[etiqueta][idioma]
  const Translate = useContext(UseContext)

  return (
    <UseContext.Provider value={{ traduce, idioma }}>
      <Menu idioma={idioma} />
      <Outlet />
      <Footer />

    </UseContext.Provider>
  )
}

export default App
