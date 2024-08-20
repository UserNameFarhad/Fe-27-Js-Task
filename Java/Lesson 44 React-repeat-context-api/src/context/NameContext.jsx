import { createContext, useState } from "react";
import React from 'react'

export const NameContext = createContext(0)

const NameContextProvider = ({ children }) => {
    const arr = useState(0)
    return (
        <>
            <NameContext.Provider value={arr}>
                {children}
            </NameContext.Provider>
        </>
    )
}

export default NameContextProvider