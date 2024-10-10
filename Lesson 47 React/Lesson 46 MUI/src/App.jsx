import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PageContainer from './Components/_layout/PageContainer'
import Routing from './Routing'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>      
      <div>App</div>
    </Provider>
  )
}

export default App