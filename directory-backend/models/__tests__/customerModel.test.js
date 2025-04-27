const customerModel = require('../customerModel');
const pool = require('../../db');

jest.mock('../../db', () => ({
  query: jest.fn(),
}));

describe('Customer Model', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getAllCustomers should return customers', async () => {
    const mockRows = [{ id: 1, name: 'John Doe' }];
    pool.query.mockResolvedValue({ rows: mockRows });

    const customers = await customerModel.getAllCustomers();
    expect(customers).toEqual(mockRows);
    expect(pool.query).toHaveBeenCalledWith('SELECT * FROM customers ORDER BY id ASC');
  });

  test('addCustomer should insert a customer and return it', async () => {
    const newCustomer = {
      name: 'John Doe',
      email: 'john@example.com',
      company_name: 'Reid Petroleum',
      phone: '123-456-7890',
      profile_picture_url: 'http://example.com/image.png',
      contract_start_date: '2025-04-15',
      contract_expire_date: '2026-04-15',
    };

    pool.query.mockResolvedValue({ rows: [newCustomer] });

    const result = await customerModel.addCustomer(newCustomer);
    expect(result).toEqual(newCustomer);
    expect(pool.query).toHaveBeenCalled();
  });

  test('deleteCustomer should call delete query', async () => {
    pool.query.mockResolvedValue({});

    await customerModel.deleteCustomer(1);
    expect(pool.query).toHaveBeenCalledWith('DELETE FROM customers WHERE id = $1', [1]);
  });
});