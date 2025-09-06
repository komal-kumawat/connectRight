import React from 'react';
import Logo from './Logo';
import User from './User';
import JoinButton from './JoinButton';
import StartMeetingButton from './StartMeetingButton';

const Header = () => {
  return (
    <div
      style={{
        width:"100%",
        position: 'fixed',
        display:'flex',
        justifyContent:'center',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
        <div style={{ display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: "50px",
        padding: '10px ',
        
        width:"80%"
        }}>
      <Logo />

      <div style={{ display: 'flex', gap: '10px' }}>
        <JoinButton></JoinButton>
        <StartMeetingButton/>
        <User/>
      </div>
      </div>
    </div>
  );
};

export default Header;
