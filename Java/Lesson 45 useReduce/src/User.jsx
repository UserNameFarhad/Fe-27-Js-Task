import React, { useEffect, useReducer } from 'react'
import { reducer } from './Reduce/UserReducer'

export const User = () => {
    const [user, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        dispatch({ type: "getAllUsers" })
    }, [])

    return (
        <>
            <button onClick={() => dispatch({ type: "addUser" })}>Добавить нового пользователя</button>
            {
                user.map(({ имя, возраст, id }) => {
                    return (
                        <div key={id}> {имя} - {возраст}
                            <button onClick={() => dispatch({ type: "userDelete", payload: id })}>X</button>
                            <button onClick={() => dispatch({ type: "editUser", payload: id })}>🖋️</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default User