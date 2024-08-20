// import React, { useState } from 'react'
// import Foo from "./Foo"

// const App = () => {
//   const [show, setShow] = useState(true)
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>show foo</button>
//       {show && <Foo />}
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import Foo from './Foo'

const App = () => {
   const [show, setShow] = useState(true)
  return (
    <>
    <button onClick={() => setShow(!show)}>Show Foo</button>
    {show && <Foo />}
    </>
  )
}

export default App