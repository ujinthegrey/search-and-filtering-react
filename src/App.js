import './index.css'

import Navigation from "./Navigation/Navigation"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from './Sidebar/Sidebar'

function App() {
  return (
    <>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
    </>
  )
}

export default App
