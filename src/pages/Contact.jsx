import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
     <body className='contact__email'>
        <h1 className='contact__title title'>Contact Me</h1>
        <p>Please Direct All Questions and Concerns Towards</p>
        <a href="mailto:pxx2rz@virginia.edu" class="footer__link footer-link">pawlasnr@gmail.com</a>
     </body>
     <body className='portfolio'>
        <h1>Check Out My Portfolio</h1>
        <a href='https://nathan-pawlas.github.io/portfolio/' target="_blank">
        <button className='link'>Portfolio Site</button>
        </a>
     </body>
    </div>
  )
}

export default Contact