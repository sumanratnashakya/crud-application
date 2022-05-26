import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber ] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    const {id} = useParams(); 
    const contacts = useSelector((state)=>state);
    const currentContact = contacts.find((contact)=>contact.id === parseInt(id));

    useEffect(()=>{
       if(currentContact){
           setName(currentContact.name);
           setEmail(currentContact.email);
           setNumber(currentContact.number);
       }
    }, [currentContact])

    const handleSubmit = (e)=>{

        const checkEmail = contacts.find((contact)=>contact.id !== parseInt(id) && contact.email === email);
        const checkNumber = contacts.find((contact)=>contact.id !== parseInt(id) && contact.number === parseInt(number));

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
            id: parseInt(id ),
            name, 
            email,
            number 
        }
        dispatch({type: "Update_Contact", payload:data})
        toast.success('student Updated successfully')
        history.push('/');
    }

  return (
      
    <div className='container my-5' >
        {currentContact? (
        <>
         <h1 className='display-3 text-center'>
              Edit Contact {id}
          </h1>
      <div className='row'>
          <div className='col-md-6 shadow mx-auto p-5'>
             <form onSubmit={handleSubmit}>
                 <div className="form-group p-2">
                     <input type="text" placeholder='Enter your Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                 </div>
                 <div className="form-group p-2">
                     <input type="email" placeholder='Enter your Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 </div>
                 <div className="form-group p-2">
                     <input type="number" placeholder='Enter your Number ' className='form-control' value={number} onChange={(e)=>setNumber(e.target.value)}/>
                 </div>
                 <div className="form-group p-2 mx-2" style={{textAlign: 'center'}}>
                     <input type="submit" placeholder='Enter your Name' value='Edit Contact' className='btn btn-dark mx-2' />
                     <Link className='btn btn-dark mr-2' to='/'>Cancel</Link>
                 </div>
             </form>
          </div>
      </div> 
        </>
   ):
   <h1 className='display-3 text-center'>
              Contact id {id} does not exist
          </h1>
   }
   
  </div>
  )
}

export default EditContact
