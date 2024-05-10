import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { ThemeSwitch } from './ThemeSwitch';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const CustomerForm: React.FC = () => {
  const logo = useRef<HTMLImageElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const header = useRef<HTMLHeadingElement>(null)


  const [themeMode, setThemeMode] = useState<"light" | "dark">("light")
  const [formData, setFormData] = useState<FormData>({
    name: 'John Doe',
    email: 'johndoe@email.com',
    phone: '+13024562353'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleThemeSwap = () => {
    console.log("check", themeMode)
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (
      !logo.current ||
      !container.current ||
      !header.current
    ) { return }

    logo.current.src = logo.current.src.replace(/(light)|(dark)/, themeMode)
    container.current.style.backgroundColor = themeMode === 'light' ? '#f9f9f9' : '#2e2e2e'
    header.current.style.color = themeMode === 'light' ? '#3d3d3d' : 'white'

    const labels = [...container.current!.querySelectorAll('label')]
    const inputs = [...container.current!.querySelectorAll('input')]

    labels.forEach((label) => label.style.color = themeMode === 'light' ? '#3d3d3d' : 'white')
    inputs.forEach((input) => {
      if (themeMode === "light") {
        input.style.color = '#3d3d3d'
        input.style.backgroundColor = 'white'
        input.style.borderColor = '#cccccc'
      } else if (themeMode === 'dark') {
        input.style.color = 'white'
        // input.style.backgroundColor = '#3d3d3d'
        input.style.backgroundColor = '#2e2e2e'
        input.style.borderColor = '#616161'
      }
    })
  }, [themeMode])

  return (
    <div ref={container} className='container'>
      <div className="navBar">
        <div className="logo">
          <img ref={logo} src="./compass-logo-light.svg" alt=""></img>
        </div>
        <div onClick={handleThemeSwap}>
          <ThemeSwitch theme={themeMode}></ThemeSwitch>
        </div>
      </div>
      <h2 ref={header}>Contact Details</h2>
      <form onSubmit={undefined}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">Next</button>
      </form>
    </div>
  );
};

