import React from 'react';
import './Signup.css'
import { TiArrowBack } from 'react-icons/ti'
import { Article } from '../components';

const Signup = () => {
  const [name, setName] = React.useState('')
  const [city, setCity] = React.useState('')
  const [show, setShow] = React.useState(true)
  const nameValue = React.useRef('')
  const cityValue = React.useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const changeName = () => {
    setName(nameValue.current.value)
  }

  const changeCity = () => {
    setCity(cityValue.current.value)
  }

  const handleclick = () => {
    setShow(true)
    setName('')
    setCity('')
  }

  return (
    <div className='donate__signup'>
      {show ? (
        <section className="donate__signup-top">
          <h1 className='gradient__text'>Fill The Form and Get New Opportunities</h1>
          <form onSubmit={handleSubmit} className='donate__signup-top_form'>
            <div className="donate__signup-top_form-1">
              <label htmlFor="name">Name:</label>
              <input type="text" id='name' ref={nameValue} onChange={changeName} />
            </div>
            <div className="donate__signup-top_form-2">
              <label htmlFor="city">City:</label>
              <input type="text" id='city' ref={cityValue} onChange={changeCity} />
            </div>
            <div className="donate__signup-top_form-button">
              <button type='submit' onClick={() => setShow(false)}>Start Now</button>
            </div>
          </form>
        </section>
      ) :
        (
          <section className='donate__signup-bottom'>
            <div className="donate__signup-bottom_title">
              <div className='donate__signup-bottom_title-icon'>
                <TiArrowBack size={35} style={{ cursor: 'pointer' }} onClick={handleclick} />
              </div>
              <h1>Hi {name}, This is What We Found Near {city}:</h1>
            </div>
            <div className="donate__signup-bottom_articles">
              <Article />
            </div>
          </section>
        )}
    </div>
  );
}

export default Signup;
