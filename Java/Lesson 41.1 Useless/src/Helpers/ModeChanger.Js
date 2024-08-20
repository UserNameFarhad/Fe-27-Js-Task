export const modeChanger = (mode) => {
    if (mode === "light") {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
    } else if (mode === 'dark') {
        document.body.classList.remove("light")
        document.body.classList.add("dark")
    }
}

export const changeMode = (mode, setMode) => {
    if (mode === "light") {
        setMode("dark");
        localStorage.setItem("mode", "dark")
    } else if (mode === "dark") {
        setMode("light");
        localStorage.setItem('mode', "light")
    }
}