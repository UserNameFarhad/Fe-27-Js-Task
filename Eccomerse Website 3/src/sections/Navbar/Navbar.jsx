import React from 'react'
import "./Navbar.css"
import { RiHeartFill, RiSearchLine, RiShoppingCartFill, RiUserFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <header>
       <nav>
        <div className="tn-container container">
          <a href="" className="logo">Shoppee</a>
          <div className="search-box">
            <input type="search" name='search' id='' placeholder='Search For Products' />
            <div className="search-icon"><RiSearchLine /></div>
          </div>
          <div className="tn-icons">
            <a href=""><RiUserFill /></a>
            <a href=""><RiHeartFill /></a>
            <a href=""><RiShoppingCartFill /></a>
          </div>
        </div>
        <hr />
        <div className="bg-container container">
          <ul className="navlist">
            <li><a href="#home">home</a></li>
            <li><a href="#categories">categories</a></li>
            <li><a href="#shop">shop</a></li>
            <li><a href="#deal">deal</a></li>
            <li><a href="#testimonial">testimonial</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
       </nav>
    </header>
  )
}

export default Navbar