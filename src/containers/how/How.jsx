import React from 'react';
import './How.css'
import { Step } from '../../components'

const How = () => {
  return (
    <div className='donate__how' id='how'>
      <div className="donate__how-content">
        <h1 className='gradient__text'>How it Works?</h1>
      </div>
      <div className="donate__how-steps">
        <Step />
        <Step />
        <Step />
      </div>
    </div>
  );
}

export default How;
