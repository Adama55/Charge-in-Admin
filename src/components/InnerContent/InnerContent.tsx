import {Outlet} from 'react-router-dom'

const  InnerContent=() =>{
  return <div className=''>
    <>
      <p> En tete ici  </p>
      <Outlet/>
    </>
      
   
  </div>;
}

export default InnerContent;
