import React, { useState } from 'react'
import "./App.css"
import Cards from './Cards';
import Mode from './Components/Mode';
import Inp from './Components/Inp';

const App = () => {
  const [showComp, setShowComp] = useState(false);


  return <div>
    {/* {users.map(({ username }) => {
      return <h2 key={username}>{username}</h2>
    })} */}
    {/* <button onClick={() => setShowComp(!showComp)}>
      {showComp ? "hide" : "show"}
    </button> */}
    {/* <h1>hi guys!</h1> */}

    <Mode />
    <hr />
    <Inp />
    <hr />
    <Cards />
    {/* {showComp && <Comp />} */}
  </div>
}

export default App
