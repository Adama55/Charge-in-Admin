import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import IconNotification from "../../asset/images/icon/icon_notifications.svg";
import "./InnerHead.css";

const InnerHead = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const [popoverVisible, setPopoverVisible] = useState(false);

  interface UserConnected {
    id: number;
    firstName: string;
    lastName: string;
    nNotifications: number;
    autre: any;
  }

  const userConnected: UserConnected[] = [
    {
      id: 1,
      firstName: "Prénom",
      lastName: "Nom",
      nNotifications: 1,
      autre: "autre"
    },
  ];
  const navigate = useNavigate();
  const handleLogoutInPopover = () => {
    localStorage.removeItem('user');
    navigate("/login")
    window.location.reload();// Redirige ou met à jour la page après la déconnexion
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Détails de l'utilisateur</Popover.Header>
      <Popover.Body>
        <p>Prénom: {userConnected[0]?.firstName}</p>
        <p>Nom: {userConnected[0]?.lastName}</p>
        <Button variant="primary" onClick={handleLogoutInPopover}>
          Logout
        </Button>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className='sl-innerHead'>
      {!isLoginPage && (
        <header className='d-flex border justify-content-end align-items-center'>
          <div className=''>
            <span className='sl-nom'>Bonjour {userConnected[0].firstName} {userConnected[0].lastName}</span>
            <span className="position-relative">
              <img src={IconNotification} alt="notification icom" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {userConnected[0].nNotifications}
              </span>
            </span>
          </div>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            show={popoverVisible}
            overlay={popover}
            rootClose
            onToggle={setPopoverVisible}
          >
            <button className="sl-userFirstChar btn btn-link">
              {userConnected[0]?.firstName.charAt(0)}
            </button>
          </OverlayTrigger>
        </header>
      )}
      <Outlet />
    </div>
  );
}

export default InnerHead;
