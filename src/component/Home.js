import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 my-5 text-end'>
                    <Link to="/add" className='btn btn-outline-dark'>Add Contact</Link>
                </div>
                <div className='col-md-6 mx-auto text-center'>
                    <h1>Home Page</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
