import React from 'react';
import { CustomerForm } from './CustomerForm';



export const PageOne: React.FC = () => {
  const appUrl = import.meta.env.VITE_APP_URL
  const lightModeUrl = `${appUrl}/light-mode`
  //   const darkModeUrl = `${appUrl}/dark-mode`

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe style={{ display: "flex", width: "50%" }} src={lightModeUrl}></iframe>
      <CustomerForm />
    </div>
  );
};
