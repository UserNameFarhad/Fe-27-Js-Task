import { log } from "console";
import { json } from "stream/consumers";

const url = "https://jsonplaceholder.typicode.com/users"
let data = []

const getData = async () => {
    const data = await fetch(url).then((r) => r.json)
    console.log(data);
    return data;
}
 
export default async function Home() {
    data = await getData()

    return (
        <>
            {
                data.map((id, username) => {
                    return <div key={id}>
                        <h1>{username}</h1>
                    </div>
                })
            }
        </>
    )
}