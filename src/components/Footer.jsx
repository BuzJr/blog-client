import React from 'react';
import Logo from '..//img/BlogLogo.png';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt=""/>
      <span className='warning'>If nothing shows up, the server hosting the backend (Heroku) is likely down, this is temporary and it will return</span>
      <span>powered by <b>React.js</b>.</span>
    </footer>
  )
}

export default Footer