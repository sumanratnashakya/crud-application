import React from 'react'

const AddContact = () => {
  return (
      <div className='container my-5' >
          <h1 className='display-3 text-center'>
                    Add Contact
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
                       <div className="form-group p-2" style={{display: 'grid', textAlign: 'center'}}>
                           <input type="submit" placeholder='Enter your Name' value='Add Contact' className='btn btn-dark' />
                       </div>
                   </form>
                </div>
            </div>
        </div>
  )
}

export default AddContact
