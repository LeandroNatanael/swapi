import React from 'react'
import '../styles/floatBar.css';
import '../services/index.js';
import Fetch from './Fetch.jsx';

const FloatBar = ({ hover }) => {

  const concatenateUrl = () => {
    return hover !== null ? process.env.REACT_APP_BASEURL + '/' + hover : null;
  };

  const renderFloatBar = (data) => {
    console.log(data);
  };

  const urlFloatBar = concatenateUrl();

  return (
    <div className='floatBar'>
      {urlFloatBar && <Fetch url={urlFloatBar} render={renderFloatBar} />}
    </div>
  )
}

export default FloatBar;
