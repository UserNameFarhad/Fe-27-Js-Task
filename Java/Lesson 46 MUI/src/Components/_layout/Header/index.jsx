import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        id:0,
        title: "Home",
        href: "/"
    },
    {
        id:1,
        title: "About",
        href: "/about"
    },
    {
        id:2,
        title: "Contact",
        href: "/contact"
    }
]

const Header = ({}) => {
  return (
    <header>
        {
            links.map(({href, id, title}) => {
                return (
                    <Link to={href} key={id}>{title}</Link>
                )
            })
        }
    </header>
  )
}

export default Header