import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  const ToastN = ({errorImg}) => {
    const notify = () =>  toast.error('Debes Ingresar Una Imagen');

  

    return (
      <div>
    
        <ToastContainer draggable={errorImg} >
            {notify}
        </ToastContainer>
      </div>
    );
  }

  export default ToastN