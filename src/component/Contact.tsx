import React, {FC} from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import { useAppSelector } from '../store/store'
import { EditContact } from './EditContact'
import { IC } from './interface'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../store/contactSlice'

export const Contact : FC = ()=> {
    const navigate= useNavigate()
   

    return (
        <>      
          <div className='flex justify-center w-[100vw] h-10 bg-black text-white items-center'>
            <div  className=''>Contact Page</div>
        </div>
           <div className='flex justify-center mt-20'>
           <button className='bg-black p-2 text-white' onClick={()=> navigate('/create-contact')}>Create Contact</button>
            </div>  
           
            <ContactsDetails />
        </>     

    )
   
}

const ContactsDetails : FC = () => {
    const contacts= useAppSelector(state=> state.contacts)
    const navigate= useNavigate();
    const dispatch= useDispatch()
    if(contacts.length == 0){
        return(
            <div className='flex justify-center'>Courses not found</div>
        )
    }else{
        return(
            <div className='flex flex-wrap text-center gap-5 m-20 mx-40 '>
                {contacts.map((contact: IC)=> (
                    <div key={contact.id} className='flex z-0  flex-col text-center text-xl  border-2 border-slate-500 w-[25vw] p-7' >
                        <div>{contact.name}</div>
                        <div>{contact.email}</div>
                        <div className='flex gap-10 justify-center m-5' >
            
                        <button className='bg-lime-600 p-2 text-white '  onClick={()=>{
                             navigate('/editContact/'+contact.id)}} >Edit</button>
                        <button className='bg-red-600 p-2 text-white ' onClick={()=> {
                            dispatch(deleteContact({id: contact.id}))
                        }} >Delete</button>

                        </div>
                    </div>
                ))}
            </div>
        )
    }
}