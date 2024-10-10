// import React, { useState } from 'react';
import "./App.css";
import Footer from "./Components/Footer/Index";
import Header from "./Components/Header";
// import Home from "./Pages/Home";
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import { Route, Routes } from 'react-router';
// import webRoutes from "./routes";
import WebRoutes from "./routes";

const App = () => {
  // const [page, setPage] = useState(0);
  // const links = [
  //     { id: 0, title: "Home" },
  //     { id: 1, title: "About" },
  //     { id: 2, title: "Contact" }
  // ];

  // const changePage = (id) => {
  //     setPage(id);
  // };

  return (
    <>
      {/* <nav>
                {links.map(({ id, title }) => (
                    <a
                        key={id}
                        onClick={() => changePage(id)}
                        href="#"
                        className={id === page ? "active" : ""}
                    >
                        {title}
                    </a>
                ))}
            </nav>

            <div className='main'>
                {page === 0 && <Home />}
                {page === 1 && <About />}
                {page === 2 && <Contact />}
            </div> */}
      {/* <Routes>
                <Route path="/home" element = {<Home />} />
                <Route path="/about" element = {<About />} />
                <Route path="/contact" element = {<Contact />} />
            </Routes> */}
      <Header />
      <div className="main">
        <WebRoutes />
      </div>
      <Footer />
    </>
  );
};

export default App;
