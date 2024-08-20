import React, { useRef, useState } from 'react'

const Inp = () => {
    // const [val, setVal] = useState("")
    const inpRef = useRef();
    // const handleClick = () => {
    //     // console.log(val);
    //     const { current } = inpRef
    //     console.log(current.value);
    //     current.value = ""
    //     current.focus();
    
    return (
        <div>
            <input type="text" ref={inpRef} /*value={val} onChange={(e) => setVal(e.target.value)}*/ />
            <h2>{inpRef?.current?.value}</h2>
            {/* <button onClick={handleClick}>click me</button> */}
        </div>
    )
};
// }

export default Inp