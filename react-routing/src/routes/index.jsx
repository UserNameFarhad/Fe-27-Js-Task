import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import NotFound from '../Error'

const WebRoutes = () => {

    const routes = [
        { id: 0, component: <Home />, path: "/home" },
        { id: 2, component: <NotFound />, path: "/*" },
        { id: 1, component: <About />, path: "/about" },
        { id: 2, component: <Contact />, path: "/contact" }
    ];

    return (
        <Routes>
            {
                routes.map(({ id, component, path }) => {
                    return <Route key={id} path={path} element={component} />
                })
            }
            {/* <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    )
}

export default WebRoutes;