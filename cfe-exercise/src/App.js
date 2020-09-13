import React from 'react'
import logo from './static/wooder/images/logo.png'
import arrow from './static/wooder/images/arrow-icon.png'
import { CaretDownIcon } from './static/wooder/icons/CaretDownIcon'
import './static/wooder/css/style.css'

function App() {
  return (
    <>
      <section className='first-section'>
        <header>
          <div className='first-section__logo'>
            <img src={logo} />
          </div>
          <div className='first-section__header-bar'>
            <a href='#'>HOME</a>
            <a href='#'>PRODUCT</a>
            <a href='#'>ABOUT</a>
          </div>
          <div className='first-section__language'>
            <span>EN</span>
            <CaretDownIcon />
          </div>
        </header>
        <body>
          <div className='first-section__learn-more'>
            <h1>WOODER</h1>
            <button className='first-section__learn-more--btn'>
              <span>Learn more</span>
              <img src={arrow} />
            </button>
          </div>
        </body>
      </section>
    </>
  )
}

export default App
