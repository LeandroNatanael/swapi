import React from 'react'
import Fetch from './componets/Fetch.jsx'
import { Navbar } from './componets/Navbar.jsx'
import services from './services/index.js'
import './styles/app.css'

export const App = () => {
  
  const renderNavbar = (data) => <Navbar navData={data} />;
  
  return (
    <div>
      <Fetch url={services.url} render={renderNavbar} />
    </div>
  )
}

