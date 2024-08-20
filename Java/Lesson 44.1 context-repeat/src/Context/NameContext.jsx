import { createContext, useState } from "react";
import React from 'react'

export const NameContext = createContext("")

const NameContextProvider = ({ children }) => {
    const [name, setname] = useState("Ali")
    return (
        <NameContext.Provider value={[name, setname]}>
            {children}
        </NameContext.Provider >
    )
}

export default NameContextProvider