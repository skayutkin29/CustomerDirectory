// const customerController = require('../customerController');
// const customerModel = require('../../models/customerModel');

// jest.mock('../../models/customerModel');

// describe('Customer Controller', () => {
//   let req, res;

//   beforeEach(() => {
//     req = {}; // fake request
//     res = {
//       json: jest.fn(),
//       status: jest.fn(() => res),
//       send: jest.fn(),
//       end: jest.fn(),
//     };
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('getCustomers should return list of customers', async () => {
//     const mockCustomers = [{ id: 1, name: 'John Doe' }];
//     customerModel.getAllCustomers.mockResolvedValue(mockCustomers);

//     await customerController.getCustomers(req, res);

//     expect(customerModel.getAllCustomers).toHaveBeenCalled();
//     expect(res.json).toHaveBeenCalledWith(mockCustomers);
//   });

//   test('addCustomer should add a customer', async () => {
//     const newCustomer = { name: 'Jane Doe' };
//     req.body = newCustomer;
//     customerModel.addCustomer.mockResolvedValue(newCustomer);

//     await customerController.addCustomer(req, res);

//     expect(customerModel.addCustomer).toHaveBeenCalledWith(newCustomer);
//     expect(res.status).toHaveBeenCalledWith(201);
//     expect(res.json).toHaveBeenCalledWith(newCustomer);
//   });

//   test('deleteCustomer should delete a customer', async () => {
//     req.params = { id: 1 };

//     await customerController.deleteCustomer(req, res);

//     expect(customerModel.deleteCustomer).toHaveBeenCalledWith(1);
//     expect(res.send).toHaveBeenCalledWith('Customer deleted');
//   });
// });


const customerController = require('../customerController');
const customerModel = require('../../models/customerModel');

//not real database
jest.mock('../../models/customerModel');

describe('Customer Controller', () => {
    let req, res;

    beforeEach(() => {
    req = {};
    res = {
        json: jest.fn(),
        status: jest.fn(() => res),
        send: jest.fn(),
        end: jest.fn(),
    };
    });

    afterEach(() => {
    jest.clearAllMocks();
    });

    test('getCustomers should return list of customers', async () => { //getCustomer test
    const mockCustomers = [{ id: 1, name: 'John Doe' }];
    customerModel.getAllCustomers.mockResolvedValue(mockCustomers);

    await customerController.getCustomers(req, res);

    expect(customerModel.getAllCustomers).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockCustomers);
    });

    test('addCustomer should add a customer', async () => { //addCustomer test
    const newCustomer = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        company_name: 'Company B',
        phone: '123-456-7890',
        contract_start_date: '2025-04-01',
        contract_expire_date: '2026-04-01',
        };

    req.body = newCustomer;
    customerModel.addCustomer.mockResolvedValue(newCustomer);

    await customerController.addCustomer(req, res);

    expect(customerModel.addCustomer).toHaveBeenCalledWith(newCustomer);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(newCustomer);
    });

    test('deleteCustomer should delete a customer', async () => { //deleteCustomer test
    req.params = { id: 1 };

    await customerController.deleteCustomer(req, res);

    expect(customerModel.deleteCustomer).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.end).toHaveBeenCalled();
    });

    test('addCustomer should return 400 if input is invalid', async () => { //isValidCustomer test
    req.body = { name: '', email: 'bademail', company_name: '', phone: 'wrong', contract_start_date: 'wrong', contract_expire_date: 'wrong' };

    await customerController.addCustomer(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid customer data' });
    });
});