import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Counter } from './_common/counter'

const App = () => {
  return (
    <Provider store={store}>
    <div>App</div>
    <Counter />
    </Provider>
  )
}

export default App