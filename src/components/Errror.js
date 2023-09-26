import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errror = () => {


  const history = useNavigate();

  return (

    <div className='text-center justify-center items-center'>
      <h4>404 Error ! Page Not Found 😭</h4>
      <button className='btn btn-primary' onClick={() => history("/")}>Redirect Login Page</button>
    </div>

  )
}

export default Errror