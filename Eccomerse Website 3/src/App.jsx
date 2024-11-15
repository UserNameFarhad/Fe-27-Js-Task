import React from 'react'
import Navbar from './sections/Navbar/navbar'
import Blog from './sections/Blog/blog'
import Categories from './sections/Categories/categories'
import Footer from './sections/Footer/footer'
import Hero from './sections/HEro/Hero'
import Shop from './sections/Shop/shop'
import Testimonial from './sections/Testimonial/testimonial'


const App = () => {
  return (
    <main className='app'>
      <Navbar />
      <Blog />
      <Categories />
      <Footer />
      <Hero />
      <Shop />
      <Testimonial />
    </main>
  )
}

export default App