import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EditContact = () => {

    const {id} = useParams(); 

  return (
    <div className='container my-5' >
    <h1 className='display-3 text-center'>
              Edit Contact {id}
          </h1>
      <div className='row'>
          <div className='col-md-6 shadow mx-auto p-5'>
             <form>
                 <div className="form-group p-2">
                     <input type="text" placeholder='Enter your Name' className='form-control'/>
                 </div>
                 <div className="form-group p-2">
                     <input type="email" placeholder='Enter your Email' className='form-control'/>
                 </div>
                 <div className="form-group p-2">
                     <input type="number" placeholder='Enter your Number ' className='form-control'/>
                 </div>
                 <div className="form-group p-2 mx-2" style={{textAlign: 'center'}}>
                     <input type="submit" placeholder='Enter your Name' value='Edit Contact' className='btn btn-dark mx-2' />
                     <Link className='btn btn-dark mr-2' to='/'>Cancel</Link>
                 </div>
             </form>
          </div>
      </div>
  </div>
  )
}

export default EditContact
