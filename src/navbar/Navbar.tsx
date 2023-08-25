import React,{FC} from 'react'
import { Link } from 'react-router-dom'

export const Navbar:FC = () => {
  return (
    <div className='flex flex-col gap-10 mt-10 m-0 bg-black h-[100vh] w-[12vw] text-white items-center text-center fixed'>
    
      <Link to= '/contact'>Contact</Link>
      <Link to= '/maps'>Charts and maps</Link>
     
    </div>
  )
}