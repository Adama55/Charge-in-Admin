import {Outlet} from 'react-router-dom'

const  InnerContent=() =>{
  return <div className=''>
      <Outlet/>
   
  </div>;
}

export default InnerContent;
