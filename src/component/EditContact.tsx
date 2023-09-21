import React, {ChangeEvent, FC, useState} from 'react'
import { useAppSelector } from '../store/store'
import { IC } from './interface';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateContact } from '../store/contactSlice';


export const EditContact = ()=> {
    const params = useParams();
    const {id} = params;
   //console.log(id);
   const contact= useAppSelector(state=> state.contacts);
   const dispatch= useDispatch();
//    console.log(typeof contact[2].id);
//    console.log(typeof Number(id));
   
    let currentContact : IC = {id:0, name:'', email:''}
   for(let i=0;i<contact.length;i++){
    if(contact[i].id === Number(id)){
      currentContact= contact[i];
        break;
    }
   }

   //console.log(currentContact);
   const navigate= useNavigate();

    const contacts= useAppSelector(state => state.contacts);
    const [name, setName]= useState<string>(currentContact.name)
    const [lastName, setLastName]= useState<string>(currentContact.email);
    

    const handleChange= (event: ChangeEvent<HTMLInputElement>)=> {
        if(event.target.name === 'firstName'){
            setName(event.target.value);
        }else{
            setLastName(event.target.value); 
        }
    }

    return(
        <>
        <div className="flex justify-center w-[100vw] h-10 bg-black text-white items-center">
        Contact Page
      </div>
        <div className="flex justify-center text-xl m-10">
        Edit contact screen
      </div>
      <center>
        <div className="flex flex-col justify-center text-xl m-3 border-2 border-slate-500 w-[25vw] p-7">
          <div className="flex justify-center gap-3 m-3">
            <label>First name:</label>
            <input
            value={name}
              type="text"
              name="firstName"
              className="border-2 rounded-md border-slate-300"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center gap-3 m-3">
            <label>Last name:</label>
            <input
            value={lastName}
              type="text"
              name="lastName"
              className="border-2 rounded-md border-slate-300"
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="bg-black p-2 text-white m-4"
          
          onClick={()=> {
            const obj={
               name:name, email:lastName
              }
            dispatch(updateContact({id:currentContact.id, updatedData:obj}))
            alert('Contact updated successfully')
            navigate('/contact')
          }}
        >
          Save Editted Contact
        </button>
      </center>

        </>
    )
}