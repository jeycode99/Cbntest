Getting Started
To run the project locally, you need to have Node.js installed. You can use the following steps to set up the development environment:

Step 1: Clone the Repository
If you haven’t already cloned the repository, run the following command:

git clone https://github.com/jeycode99/Cbntest.git
Step 2: Install Dependencies
Navigate into the project directory:

cd project-name
Then install the necessary dependencies:

npm install

# or

yarn install

# or

pnpm install

# or

bun install
Step 3: Run the Development Server
To start the development server, run:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
After running the above command, the application should be accessible at http://localhost:3000 in your browser.

# API Implementation

The API has been implemented for the product listing and authentication functionality. The data for products is being fetched from a static JSON file (product.json) located in the src/api/ directory.

# API Endpoints:

GET /api/products: Returns a list of products.
GET /api/products/:id: Fetch a single product by its ID.
For the sake of this implementation, the products are statically stored in a JSON file (product.json). In a real-world application, this would be replaced with dynamic API calls to a backend server or third-party API.

# Product Data Structure

Each product has the following structure:

json
{
"id": 1,
"title": "Product Name",
"description": "Product Description",
"price": 100,
"category": "Category Name",
"thumbnail": "image-url.jpg",
"discountPercentage": 20,
"rating": 4.5,
"stock": 50
}
Example Product JSON:
json
{
"products": [
{
"id": 1,
"title": "Product 1",
"description": "This is a description of Product 1",
"price": 25.99,
"category": "Electronics",
"thumbnail": "/images/product1.jpg",
"discountPercentage": 10,
"rating": 4.5,
"stock": 150
},
{
"id": 2,
"title": "Product 2",
"description": "This is a description of Product 2",
"price": 49.99,
"category": "Furniture",
"thumbnail": "/images/product2.jpg",
"discountPercentage": 15,
"rating": 4.2,
"stock": 75
}
]
}

# Authentication:

For authentication, the project includes a Login page where users can log in with a username and password. A static authentication mechanism is used, where the username is compared to the hardcoded value of admin and the password is compared to 12345.

# Login Credentials:

Username: admin
Password: 12345
Upon successful login, users will be redirected to the product listing page where they can view and filter products by category.

# How to Use

Login:
Navigate to the /login route to access the login page.
Enter the username and password (as mentioned above).
Upon successful login, you will be redirected to the / route, where a list of products will be displayed.
Filtering Products by Category:
On the homepage, a sidebar menu provides a list of categories.
Click on a category to filter the displayed products based on the selected category.
Logout:
On the homepage, you can click the Logout button located in the sidebar to log out of the application. The logout action will clear the user session (remove the userToken from localStorage) and redirect you back to the login page.
Project Structure
Here is the overall structure of the project:

plaintext
src/
│
├── api/ # Contains static JSON data files (e.g., product.json)
│
├── components/ # Reusable UI components like Sidebar, Product List, etc.
│ ├── sidebarMenu.js
│ ├── productList.js
│ └── loadingMessage.js
|
├── hooks/ # Custom hooks like useProducts
│ └── useProducts.js
│
├── view/ # Main views/screens for each route
│ ├── authentication/ # Login and other authentication related views
│ │ └── loginView.js
│ └── home/ # Home screen with product listing and category filtering
│ └── homeProduct.js
│
└── App.js

# Main entry point for the React application

Additional Notes:
The project uses React Router for client-side routing.
Context API is used for global state management, such as managing user authentication.
The SidebarMenu component is responsible for displaying the product categories and handling the category filtering logic.
The useProducts custom hook is responsible for fetching product data.
