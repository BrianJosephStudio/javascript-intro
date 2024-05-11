import '../App.css'
import React from 'react';
import { CustomerForm } from './CustomerForm';



export const PageOne: React.FC = () => {
  const appUrl = import.meta.env.VITE_APP_URL
  const lightModeUrl = `${appUrl}/light-mode`
  //   const darkModeUrl = `${appUrl}/dark-mode`

  return (
    <div className='wrapper'>
      <iframe src={lightModeUrl}></iframe>
      <CustomerForm
        themeSwitch={true}
        validateInput={false}
       />
    </div>
  );
};
