// import Card from "./Components/Card";
// import Header from "./Components/Header";
// import "./app.css"





// function App() {
//     const data = [
//         { id: 0, name: "Ramin", surname: "Mammadzade", description: "lorem impsum dolor sit" },
//         { id: 0, name: "Yamin", surname: "Dadasov", description: "lorem impsum dolor sit" },
//         { id: 0, name: "Ramiz", surname: "Suleymanov", description: "lorem impsum dolor sit" },
//         { id: 0, name: "Arif", surname: "Alakbarli", description: "lorem impsum dolor sit" },
//         { id: 0, name: "Sabit", surname: "Akbarov", description: "lorem impsum dolor sit" }
//     ]
//     return <div>
//         <Header />

//         <div className="cards" >
//             {data.map(({ name, surname, description }) => {
//                 return (
//                     <Card
//                         name={name}
//                         surname={surname}
//                         description={description}
//                     />
//                 )
//             })}
//             {/* <Card name="ramin" description="salam dostlar men react orgenirem" />
//             <Card name="ramin" description="salam dostlar men react orgenirem" />
//             <Card name="ramin" description="salam dostlar men react orgenirem" />
//             <Card name="ramin" description="salam dostlar men react orgenirem" />
//             <Card name="ramin" description="salam dostlar men react orgenirem" />
//             <Card name="ramin" description="salam dostlar men react orgenirem" /> */}
//         </div>
//     </div>
// }

// export default App;

///////////////////// STATE
// import Test2, { Test } from "./Components/Test"

// import { useState } from "react";
// function App() {
//     console.log('app render edildi');
//     const [count, setCount] = useState(0)

//     const azalt = () => {
//         if (count !== -10) {
//             setCount(count - 1)
//         }
//     }

//     const artir = () => {
//         if (count !== 10) {
//             setCount(count + 1)
//         }
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={artir}>artir</button>
//             <button onClick={azalt}>azalt</button>
//             <button onClick={() => setCount(0)}>sifirla</button></>
//         // <> 
//         // < Test />
//         // < Test2 />
//         // </>
//     )
// }



// export default App

// import { useState } from "react";
// import './app.css'
// function App() {

//     const [color, setColor] = useState('red')
//     const [value, setValue] = useState('')

//     const bgChanger = (colorName) => {
//         setColor(colorName)
//     }

//     const textWritter = (text) => {
//         setValue(text)
//     }

//     return (
//         <>
//             {/* <input type="text" onChange={(e) => textWritter(e.target.value)}/>
//             <p>{value}</p>
//             <div className="box" style={{ backgroundColor: color }}></div>
//             <button onClick={() => { bgChanger('red') }}>red</button>
//             <button onClick={() => { bgChanger('green') }}>green</button>
//             <button onClick={() => { bgChanger('blue') }}>blue</button>
//             <button onClick={() => { bgChanger('yellow') }}>yellow</button>
//             <button onClick={() => { bgChanger('orange') }}>orange</button> */}
//             <h2>Todo</h2>

//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="New todo"/>
//                 <input type="submit" placeholder="Add Todo"/>
//             </form>

//         </>
//     )
// }

// export default App;

/////////////////////// Tekrar
// import { useState } from "react";

// function App() {
//     console.log("app render edildi");
//     const [count, setCount] = useState(0)

//     const artir = () => {
//         setCount(count + 1)
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>artir</button>
//         </>
//     )

// }

// export default App;

//////////////////////////

import { useState } from "react";
import "./app.css";

function App() {
    console.log("app render edildi");

    
    const [color, setColor] = useState('red')
    const [value, setValue] = useState('')

    const bgChanger = (colorName) => {
        setColor(colorName)
    }
    const inputValue = (valueName) => {
        setValue(valueName)
    }

    return (
        <>
        <input type="text" onChange={(e) => inputValue(e.target.value)}/>
        <p>{value}</p>
           <div className="box" style={{background:color}}></div>
           <button onClick={() => bgChanger("red")}>red</button>
           <button onClick={() => bgChanger("blue")}>blue</button>
           <button onClick={() => bgChanger("green")}>green</button>
           <button onClick={() => bgChanger("yellow")}>yellow</button>
           <button onClick={() => bgChanger("orange")}>orange</button>
        </>
    )

}

export default App;