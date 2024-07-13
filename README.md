<h1 align="center">AzuraCart</h1>

AzuraCart is a comprehensive full-stack MERN application designed to streamline the online shopping experience. It allows customers to easily place and manage their orders, enables sellers to list and manage their products, and provides administrators with powerful tools to oversee and control the entire platform effectively.

## 🌐 Deployment

⭐️ **AzuraCart is now live and can be accessed at the following link: [AzuraCart Deployment](https://azura-cart.vercel.app/)**

## <a name="tech-stack">⚙️ Tech Stack</a>

[![Stack Used](https://skillicons.dev/icons?i=react,redux,html,js,tailwind,nodejs,express,npm,mongodb,gmail,vercel)](https://skillicons.dev)

## <a name="features">🔋 **Features**</a>

- **Real-Time Email Verification**: Verifies user emails during registration.

- **JWT-Based Authentication**: Secures user access with JSON Web Tokens.

- **Add-to-Cart**: Allows customers to manage their product selections before checkout.

- **Discounts & Coupons**: Supports promotional codes and offers.

- **User Ratings & Reviews**: Enables customers to rate and review products.

- **Order Tracking**: Provides real-time updates on order status.

- **Secure Payment Integration**: Uses Stripe for secure transactions.

- **Shipping Integration**: Calculates shipping costs and manages delivery options.

- **Search & Filter**: Offers advanced search and filtering options for easy product discovery.

- **Product Categories**: Organizes products into categories for streamlined navigation.

- **Wishlist**: Lets customers save products for future purchases.

- **Separate Dashboards**: Provides distinct dashboards for Admins, Customers, and Sellers.

- **State Management with Redux**: Ensures consistent state flow across the application.

- **Image Uploads with Multer**: Manages product image uploads for sellers.


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Aryan7511/AzuraCart.git
cd AzuraCart
```

**Setting Up the Backend**

1. Navigate to the backend/config and create a .env file using .env.example as a template:
   
```bash
cd backend/config
cp .env.example .env
```
2. Open the .env file and configure the following variables:
```env
DB_URL=              # MongoDB connection URL (e.g., `mongodb://your-mongodb-url`).
JWT_SECRET_KEY=      # Key for signing and verifying JWT tokens.
ACTIVATION_SECRET=   # Key for account activation purposes.
SMPT_PASSWORD=       # SMTP app password (generate this in Gmail settings).
SMPT_MAIL=           # Email address for SMTP authentication (e.g., `your-email@gmail.com`).
STRIPE_API_KEY=      # Stripe publishable key.
STRIPE_SECRET_KEY=   # Stripe secret key.
```
3. Open the url.js file present in the root directory of the backend folder and update it as follows:
```javascript
export const frontend_url = "http://localhost:3000";
// export const frontend_url = 'https://azura-cart.vercel.app';
```
**Setting Up the Frontend**
   
1. Open the server.js file present in the frontend/src directory and update it as follows:
```javascript
export const server = "http://localhost:8000/api/v2";
export const backend_url = "http://localhost:8000/";
// export const server = "https://azuracart.onrender.com/api/v2";
// export const backend_url = "https://azuracart.onrender.com/";
```

**Installation**

Install the required dependencies for both backend and frontend using npm:

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```


**Running the Project**
1. Start the backend server:
```bash
cd backend
npm start
```
2. In a new terminal, start the frontend development server:
```bash
cd frontend
npm start
```  

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
