import React, { useContext } from 'react'
import { NameContext } from './Context/NameContext'

const User = () => {
    const [name, setname] = useContext(NameContext)
    return (
        <>
            <h3>Hi dear {name}</h3>
            <button onClick={() => {
                const yeniAd = prompt("yeni ad daxil edin:")
                setname(yeniAd)
            }}>Ad deyiw</button>
        </>
    )
}

export default User