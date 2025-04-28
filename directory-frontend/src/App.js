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



// import React, { useEffect, useState } from 'react';
// import { getCustomers } from './api';
// import CustomerForm from './components/customerForm';
// import CustomerList from './components/customerList';

// function App() {
//   const [customers, setCustomers] = useState([]);

//   const fetchCustomers = async () => {
//     const res = await getCustomers();
//     setCustomers(res.data);
//   };

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   return (
//     <div style={{ maxWidth: 800, margin: '0 auto' }}>
//       <h1>Customer Directory</h1>
//       <CustomerForm onCustomerAdded={fetchCustomers} />
//       <CustomerList customers={customers} onCustomerDeleted={fetchCustomers} />
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import { getCustomers } from './api';
// import CustomerForm from './components/customerForm';
// import CustomerList from './components/customerList';

// function App() {
//   const [customers, setCustomers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const fetchCustomers = async () => {
//     const res = await getCustomers();
//     setCustomers(res.data);
//   };

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   //filter customers based on search
//   const filteredCustomers = customers.filter((cust) =>
//     cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     cust.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     cust.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ maxWidth: 800, margin: '0 auto' }}>
//       <h1>Customer Directory</h1>
//       <input
//         type="text"
//         placeholder="Search customers..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ width: '100%', padding: 8, marginBottom: 20 }}
//       />

//       <CustomerForm onCustomerAdded={fetchCustomers} />
//       <CustomerList customers={filteredCustomers} onCustomerDeleted={fetchCustomers} />
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
  const [searchTerm, setSearchTerm] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); //default color

  const fetchCustomers = async () => {
    const res = await getCustomers();
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter((cust) =>
    cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cust.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cust.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //party button!!!
  const changeBackgroundColor = () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`; 
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', backgroundColor: backgroundColor, padding: 20, borderRadius: 8 }}>
      <h1>Customer Directory</h1>
      <button onClick={changeBackgroundColor} style={{ marginBottom: 20, padding: 8 }}>
        PARTY BUTTON!!! 🎉
      </button>

      <CustomerForm onCustomerAdded={fetchCustomers} />

      <input
        type="text"
        placeholder="Search customers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '97%', padding: 8, marginBottom: 0, marginTop: 20 }}
      />

      <CustomerList customers={filteredCustomers} onCustomerDeleted={fetchCustomers} />
    </div>
  );
}

export default App;