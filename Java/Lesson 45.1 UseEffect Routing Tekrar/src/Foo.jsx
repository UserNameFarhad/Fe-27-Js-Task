// import { useEffect } from "react";
// import Foo from "./Foo";

// export default function App() {
//     useEffect(() => {
//         console.log("men geldim...");
//         return () => {console.log("men getdim...");
//         }
//     }, [])
//     return (
//         <>
//             <p>Fooo</p>

//         </>
//     )
// }

import React, { useEffect } from 'react'

const Foo = () => {
    useEffect(() => {
        console.log("men geldim...");
        return () => {console.log("men getdim...");
        } 
    }, [])
    return (
        <div>Foo</div>
    )
}

export default Foo