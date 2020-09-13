import React from 'react'
import logo from './static/wooder/images/logo.png'
import arrowRightIcon from './static/wooder/images/arrow-right-icon.png'
import arrowLeftIcon from './static/wooder/images/arrow-left-icon.png'
import mouseIcon from './static/wooder/images/mouse-icon.png'
import arrowDownIcon from './static/wooder/images/arrow-down-icon.png'
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
              <img src={arrowRightIcon} />
            </button>
          </div>
          <div className='first-section__bottom-section'>
            <div className='first-section__bottom-section--left'>
              <div className="straight-line margin"/>
              <p>01</p>
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className='first-section__bottom-section--middle'>
              <img className='first-section__bottom-section--middle__mouse-icon' src={mouseIcon} />
              <img className='first-section__bottom-section--middle__arrow-down-icon' src={arrowDownIcon} />
            </div>
            <div className='first-section__bottom-section--right'>
              <button className='first-section__bottom-section--right__btn-left'>
                <img src={arrowLeftIcon} />
              </button>
              <button className='first-section__bottom-section--right__btn-right'>
                <img src={arrowRightIcon} />
              </button>
            </div>
          </div>
        </body>
      </section>
    </>
  )
}

export default App
