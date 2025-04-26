// const model = require('../models/customerModel');

// const isValidCustomer = (data) => {
//   const { name, email, company_name, phone, contract_start_date, contract_expire_date } = data;
//   const emailRegex = /^\S+@\S+\.\S+$/;
//   const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

//   return name && emailRegex.test(email) &&
//          company_name && phoneRegex.test(phone) &&
//          !isNaN(Date.parse(contract_start_date)) &&
//          !isNaN(Date.parse(contract_expire_date));
// };

// exports.getCustomers = async (req, res) => {
//   const customers = await model.getAllCustomers();
//   res.json(customers);
// };

// exports.createCustomer = async (req, res) => {
//   const data = req.body;
//   if (!isValidCustomer(data)) return res.status(400).json({ error: "Invalid input" });

//   const newCustomer = await model.addCustomer(data);
//   res.status(201).json(newCustomer);
// };

// exports.deleteCustomer = async (req, res) => {
//   const { id } = req.params;
//   await model.deleteCustomer(id);
//   res.status(204).end();
// };




const model = require('../models/customerModel');

function isValidCustomer(customer) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  
    if (!customer.name || typeof customer.name !== 'string') return false;
    if (!emailRegex.test(customer.email)) return false;
    if (!customer.company_name || typeof customer.company_name !== 'string') return false;
    if (!phoneRegex.test(customer.phone)) return false;
    if (!dateRegex.test(customer.contract_start_date)) return false;
    if (!dateRegex.test(customer.contract_expire_date)) return false;
  
    return true;
  }

exports.getCustomers = async (req, res) => {
    const customers = await model.getAllCustomers();
    res.json(customers);
};

// exports.addCustomer = async (req, res) => {
//     const customer = await model.addCustomer(req.body);
//     res.status(201).json(customer);
// };



exports.addCustomer = async (req, res) => {
    const customer = req.body;
  
    if (!isValidCustomer(customer)) {
        return res.status(400).json({ error: 'Invalid customer data' });
    }
  
    const newCustomer = await model.addCustomer(customer);
    res.status(201).json(newCustomer);
  };
  


exports.deleteCustomer = async (req, res) => {
    const { id } = req.params;
    await model.deleteCustomer(id);
    res.status(204).end();
};