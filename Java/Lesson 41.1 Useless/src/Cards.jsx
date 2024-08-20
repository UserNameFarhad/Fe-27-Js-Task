import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import axios from 'axios'

const Cards = () => {
    const [users, setUsers] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users"
    useEffect(() => {
        axios(url).then(({ data }) => {
            setUsers(data)
        })
    }, [])
    return (
        <div className="cards">
            {users.map(({ username }) => {
                return <Card username={username} key={username} />
            })
            }
        </div>
    )
}

export default Cards