import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const CustomerForm: React.FC = () => {
  const appUrl = `/${import.meta.env.VITE_APP_URL}`
  const lightModeUrl = `${appUrl}/light-mode`
  // const darkModeUrl = `${appUrl}/dark-mode`

  const [formData, setFormData] = useState<FormData>({
    name: 'John',
    email: 'Doe',
    phone: '+13024562353'
  });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    
    const handleSubmitNoJs = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const url = `/dark-mode`
      axios.get(url)
    };

  return (
      <div>
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmitNoJs}>
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
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
  );
};

