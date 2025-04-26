const pool = require('../db');

const getAllCustomers = async () => {
  const result = await pool.query('SELECT * FROM customers ORDER BY id ASC');
  return result.rows;
};

const addCustomer = async (data) => {
  const {
    name, email, company_name, phone, profile_picture_url, contract_start_date, contract_expire_date,
  } = data;

  const result = await pool.query(
    `INSERT INTO customers (name, email, company_name, phone, profile_picture_url, contract_start_date, contract_expire_date)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [name, email, company_name, phone, profile_picture_url, contract_start_date, contract_expire_date]
  );

  return result.rows[0];
};

const deleteCustomer = async (id) => {
  await pool.query('DELETE FROM customers WHERE id = $1', [id]);
};

module.exports = {
  getAllCustomers,
  addCustomer,
  deleteCustomer,
};