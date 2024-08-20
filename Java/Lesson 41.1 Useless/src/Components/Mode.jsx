import React, { useEffect, useState } from 'react'
import { modeChanger } from '../Helpers/ModeChanger.Js';
import { changeMode } from '../Helpers/ModeChanger.Js';

const Mode = () => {
  const [mode, setMode] = useState("")

  useEffect(() => {
    const currentMode = localStorage.getItem('mode') || "light";
    setMode(currentMode);
    modeChanger(mode);
  }, [])

  useEffect(() => {
    modeChanger(mode);
  }, [mode])

  return (
    <div>
      <button onClick={() => changeMode(mode, setMode)}>{mode === "light" ? "🌚" : "😎"}</button>
    </div>
  )
}

export default Mode