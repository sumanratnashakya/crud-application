import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';

const AddContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber ] = useState('');

    const contacts = useSelector ((state)=> state); //to get data from store redux

    const dispatch = useDispatch();
    const history = useHistory();



    const handleSubmit = (e)=>{

        const checkEmail = contacts.find(contact=>contact.email === email);
        const checkNumber = contacts.find(contact=>contact.number === parseInt(number));

        e.preventDefault();
        if(!name || !email || !number){
            return toast.warning('Please Fill in the form');
        }

        if(checkEmail){
            return toast.error('This email already exists!');
        }
        if(checkNumber){
            return toast.error('This Number already exists!');
        }

        const data = {
            id: contacts[contacts.length -1].id +1,
            name, 
            email,
            number 
        }
        dispatch({type: "Add_Contact", payload:data})
        toast.success('student added successfully')
        history.push('/');
    }
    
   

  return (
      <div className='container my-5' >
          <h1 className='display-3 text-center'>
                    Add Contact
                </h1>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                   <form  onSubmit={handleSubmit}>
                       <div className="form-group p-2">
                           <input type="text" placeholder='Enter your Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                       </div>
                       <div className="form-group p-2">
                           <input type="email" placeholder='Enter your Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                       </div>
                       <div className="form-group p-2">
                           <input type="number" placeholder='Enter your Number ' className='form-control' value={number} onChange={(e)=>setNumber(e.target.value)}/>
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
