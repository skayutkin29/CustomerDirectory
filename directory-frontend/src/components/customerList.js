import React from 'react';
import { deleteCustomer } from '../api';

function CustomerList({ customers, onCustomerDeleted }) {
    const handleDelete = async (id) => {
        await deleteCustomer(id);
        onCustomerDeleted();
    };

    return (
        <div>
            <h2>Customer List</h2>
            {customers.map((cust) => (
            <div key={cust.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
                <img src={cust.profile_picture_url} alt="Profile" width="50" />
                <p><strong>{cust.name}</strong> ({cust.company_name})</p>
                <p>{cust.email} | {cust.phone}</p>
                <p>Contract: {cust.contract_start_date} to {cust.contract_expire_date}</p>
                <button onClick={() => handleDelete(cust.id)}>Delete</button>
            </div>
            ))}
        </div>
    );
}

export default CustomerList;