export const reducer = (state, action) => {
    switch (action.type) {
        case "getAllUsers":
            return [
                { id: 0, имя: "али", возраст: 19 },
                { id: 1, имя: "нихад", возраст: 19 },
                { id: 2, имя: "фидан", возраст: 99 }
            ]
        case "addUser":
            const newUser = {
                имя: prompt("Введите новое имя"),
                возраст: prompt("Введите возраст"),
                id: state.length
            }
            return [...state, newUser]
        case "userDelete":
            return state.filter((user) => user.id !== action.payload)
        case "editUser":
            const newArr = state.map((user) => {
                if (user.id === action.payload) {
                    return {
                        id: user.id,
                        имя: prompt('Введите новое имя'),
                        возраст: prompt("Введите новый возраст")
                    }
                }
                return user;
            })
            return newArr
        default:
            return state
    }
}