# Zephyra Admin

Zephyra Admin is a powerful Next.js-based administrative dashboard designed for efficient management of products, collections, and orders in e-commerce environments.

## Features
- 🔐 **Secure Authentication**: Robust user authentication system powered by Clerk
- 📊 **Data Management**: Seamless integration with MongoDB for efficient data storage and retrieval
- 💳 **Payment Processing**: Integrated Stripe for secure and reliable payment handling
- 🛍️ **Product Management**: Comprehensive CRUD operations for product listings
- 🗂️ **Collection Organization**: Intuitive management of product collections
- 📦 **Order Tracking**: Real-time monitoring and management of customer orders
- 📱 **Responsive Design**: Fully responsive UI built with Tailwind CSS for optimal viewing on all devices
- 📊 **Analytics Dashboard**: Visual representation of sales and inventory data using Recharts

## Tech Stack
- **Frontend**: Next.js 14.2.4, React 18, TypeScript
- **Styling**: Tailwind CSS for responsive and customizable UI
- **Backend**: Next.js API routes with TypeScript
- **Database**: MongoDB with Mongoose ORM for efficient data modeling
- **Authentication**: Clerk for secure user management
- **Payment**: Stripe integration for processing transactions
- **Form Handling**: React Hook Form for efficient form state management
- **Validation**: Zod for robust schema validation
- **Data Visualization**: Recharts for creating interactive and responsive charts

## Getting Started

1. Clone the repository
2. Install dependencies
3. npm install
4. Set up environment variables
  - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
  - CLERK_SECRET_KEY=your_clerk_secret_key
  - MONGODB_URI=your_mongodb_connection_string
  - NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in=/sign-in
  - NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up=/sign-up
  - NEXT_PUBLIC_CLERK_FALLBACK_REDIRECT_URL=/
  - NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
  - NEXT_PUBLIC_API_URL=http://localhost:3000/api
5. Start the development server
6. npm run dev
7. Open http://localhost:3000 in your browser
8. Test login:
    - username: admin@mail.com
    - password: admin@mail.com_456
   - The account creation is restricted to one unique account for protection

## API Routes

- `/api/collections`: GET, POST, PUT, DELETE operations for product collections
- `/api/products`: CRUD operations for individual products
- `/api/orders`: GET, POST, PUT operations for order processing and management
- `/api/analytics`: GET operations for sales and inventory analytics data
  
## 🚀 Deployment
Zephyra Admin is optimized for deployment on Vercel. For alternative platforms, please refer to the Next.js deployment documentation.

## 🤝 Contributing
We welcome contributions! Feel free to submit a Pull Request.
