"use client"

import { useAppDispatch, useAppSelector } from "../../../store";
import { NotVisibleForm } from "../../../store/PolitySecure";
 
interface Props{
    children  : JSX.Element
}

export const Modal = ({ children } : Props) => {
  
  const isVisible = useAppSelector( state => state.ModalForms.isVisible ); 
  const dispatch  = useAppDispatch();
 
  const MakeItInVisible = () => {
    dispatch( NotVisibleForm() );
  }
  
  if( !isVisible )return null;

  return (
    <div className="fixed z-20 inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
      <div className='w-auto px-4 lg:px-0'>
        <div className=' rounded  shadow-md'>
          { children }
        </div>
      </div>
    </div>
  )
}
