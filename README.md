# CustomerDirectory
Problem involving a customer directory web app



Project: Simple Customer Directory (Full-Stack)
Scenario:
Build a Customer Directory where you can:
List customers.
Add a new customer.
Delete a customer.
It's a simple UI + backend system meant to mimic a small admin dashboard.
 
Backend (Node.js + SQL):

1. Tech Stack:
Node.js + Express.js.
PostgreSQL (or MySQL).

2. API Endpoints:
Method
Endpoint
Function
GET
/customers
List all customers
POST
/customers
Add a new customer
DELETE
/customers/:id
Delete a customer
Customer Model:
{
"id": 1,
"name": "John Doe",
"email":  “john.doe@example.com”,
“company_name”: “Reid Petroleum”,
“phone”: “123-456-7890”,
“profile_picture_url”: “https://reidpetroleum.com/wp-content/uploads/2014/03/ReidLogo.png”,
“contract_start_date”: “2025-04-15”,
“contract_expire_date”:“2026-04-15”
}

3. Validation:
Validate email format.
Ensure name is present.
Ensure Company Name is name
Ensure phone number is in XXX-XXX-XXXX format
Ensure contract_start_date and contract_expire_date are in the correct date format
 
Frontend (React):

1. Tech Stack:
React.js (with hooks).
Use Fetch API or Axios for HTTP requests.

2. Features:
Display the list of customers (retrieved from backend).
Provide a form to add a customer.
Allow deleting customers (with a simple button per entry).
 
Deliverables:

1. GitHub Repo (one repo or two separate for frontend/backend):
Include a README with:
How to run backend & frontend locally.
Any assumptions or extra features
Important : Everything must run locally and be reproducible

2. Database setup:
Provide SQL schema.

3. Time Expectation:
2-3 hours for completion.
Focus on functionality, clean code, and working integration.



# How to Start

backend started by running these commands from main directory:

- cd directory-backend
- npm install
- npm run dev

frontend started by running these commands from main directory (in another terminal):

- cd directory-frontend
- npm install
- npm start

this should automatically open the main page of functionality but if it doesn't automatically open, go to your browser and enter "localhost:3000" in the address bar.
