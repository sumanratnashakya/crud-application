import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Home = () => {

    const contacts = useSelector((state)=>state);

    const dispatch = useDispatch();

    const deleteContact = (id)=>{
        dispatch({type:'Delete_contact', payload:id});
        toast.warning('Contact Deleted Successfully!')
}
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 my-5 text-end'>
                    <Link to="/add" className='btn btn-outline-dark'>Add Contact</Link>
                </div>
                <div className='col-md-10 mx-auto text-center'>
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Number</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, id)=>(
                                    <tr key={id}>
                                        <td>{id+1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link className='btn btn-primary btn-small mx-2' to={`/edit/${contact.id}`}>Edit</Link>
                                            <Link className='btn btn-danger btn-small mx-2' to='/' onClick={()=> deleteContact(contact.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
