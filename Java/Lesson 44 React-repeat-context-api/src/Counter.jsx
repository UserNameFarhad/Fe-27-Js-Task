import React, { useContext } from 'react'
import { NameContext } from './context/NameContext'

const Counter = () => {
    // const [count, setCount] = useState(0)
    // const ad = useContext(NameContext)
    const [count, setCount] = useContext(NameContext)

    return (
        <>
            <h3 style={{ textAlign: "center" }}>...Hey , it's counter app...</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => {
                if (count <= 0) {
                    setCount(0)
                } else {
                    setCount(count - 1)
                }
            }}>-</button>
            <button onClick={() => console.log(count)}>count</button>
        </>
    )
}

export default Counter