import React, { useContext } from 'react'
import Counter from './Counter'
import { NameContext } from './context/NameContext'

const App = () => {
  const ad = useContext(NameContext)
  return (
    <>
      <Counter />
      <p>{ad}</p>
    </>
  )
}

export default App
