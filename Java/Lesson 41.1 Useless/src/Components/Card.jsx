import React from 'react'

const Card = ({username}) => {
    return (
        <div className="card" key={username} >
            <h2>{username}</h2>
        </div>
    )
}

export default Card