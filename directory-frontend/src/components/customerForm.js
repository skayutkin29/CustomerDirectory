import React, { useState } from 'react';
import { addCustomer } from '../api';

const initialForm = {
  name: '',
  email: '',
  company_name: '',
  phone: '',
  profile_picture_url: '',
  contract_start_date: '',
  contract_expire_date: '',
};

function CustomerForm({ onCustomerAdded }) {
    const [formData, setFormData] = useState(initialForm);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await addCustomer(formData);
        setFormData(initialForm);
        setError('');
        onCustomerAdded();
        } catch (err) {
        setError('Invalid data or server error.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Customer</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {Object.keys(initialForm).map((field) => (
                <div key={field}>
                    <input
                        type={field.includes('date') ? 'date' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field.replace(/_/g, ' ')}
                        required
                    />
                </div>
            ))}
            <button type="submit" style={{ marginTop: 5, padding: 2 }}>Add Customer</button>
        </form>
    );
}

export default CustomerForm;