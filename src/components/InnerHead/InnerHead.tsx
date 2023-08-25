import {Outlet} from 'react-router-dom'
import IconNotification from "../../asset/images/icon/icon_notifications.svg"

const  InnerHead=() =>{

  interface UserConnected {
    id: number;
    firstName: string;
    lastName: string;
    nNotifications:number;
    autre: any; 
  }
  
  const userConnected: UserConnected[] = [
    {
      id: 1,
      firstName: "Prénom",
      lastName: "Nom",
      nNotifications:1,
      autre:"autre"
    },
  ];

  return <div className='sl-innerHead'>
    <>
      <header>
        Bonjour <span className='sl-nom'> {userConnected[0].firstName} {userConnected[0].lastName}</span>
        <span  className="position-relative">
           <img src={IconNotification} alt="notification icom" />
           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{userConnected[0].nNotifications}</span>
        </span>
        <span>{userConnected[0]?.firstName.charAt(0)}</span>
      </header>
      <Outlet/>
    </>     
  </div>;
}

export default InnerHead;
