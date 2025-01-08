## 1. Install Dependencies

npm install

## 2. Run the Application

npm run dev

## 3. Build and start the containers

docker-compose up --build

## 4. Testing the Endpoints

#### Add Grocery Item:

POST /api/admin/grocery

Example: {
"name": "Apple",
"price": 2.5,
"quantity": 50
}

#### View Grocery Items:

GET /api/admin/groceries

#### Update Grocery Item:

PUT /api/admin/grocery/:id

Example:
{
"name": "Apple",
"price": 3.0,
"quantity": 60
}

#### Delete Grocery Item:

DELETE /api/admin/grocery/:id

#### View Grocery Items:

GET /api/user/groceries

#### Book Grocery Items:

POST /api/user/order

[
    {
        "id": 1,
        "quantity": 30
    }
]
