// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import { getCustomers } from './api';
import CustomerForm from './components/customerForm';
import CustomerList from './components/customerList';

function App() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const res = await getCustomers();
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h1>Customer Directory</h1>
      <CustomerForm onCustomerAdded={fetchCustomers} />
      <CustomerList customers={customers} onCustomerDeleted={fetchCustomers} />
    </div>
  );
}

export default App;
