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
    if(contacts.length === 0){
        return(
            <>
            <div className='flex justify-center mt-[130px]'>
           <img className='h-[25vh] rounded-lg' src='data:image/png;base64,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' alt="image" />
           </div>
            </>
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