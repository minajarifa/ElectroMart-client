# 🛒 Full Stack E-commerce Web Application (MERN)

A full-featured e-commerce web app built with the **MERN stack** — **MongoDB, Express.js, React, and Node.js** — featuring JWT authentication, product management, cart functionality, checkout flow with Stripe integration, and an admin dashboard.

---

## 🚀 Project Goals

The main goal is to build a scalable, secure, and responsive **E-commerce web application** with modern tools and best practices — from **user authentication** to **order management**, and **admin controls**.

---

## 🧩 MVP (Minimum Viable Product)

### ✅ Must-Have Features
- **User Authentication (JWT):**  
  Secure login & registration with token-based authentication and expiration (e.g., 5 days).
- **Product Listing & Details:**  
  Display all products with detail pages.
- **Cart System:**  
  Client-side cart persisted in localStorage.
- **Checkout & Orders:**  
  Simulate or integrate Stripe test payments.
- **User Orders Page:**  
  Show users their order history.
- **Admin Panel:**  
  Add/Edit/Delete products and view all orders.
- **Validations & Error Handling:**  
  Proper form validation and API error responses.

---

## 🌱 v2 (Future Enhancements)

- Real Stripe payments (live mode)
- Reviews & ratings
- Wishlist
- Product search, filters & pagination
- Inventory/stock updates
- Image uploads (Cloudinary / S3)
- Email notifications (Nodemailer)
- Coupons & discounts
- Multi-address support & order tracking
- Analytics dashboard
- Caching, rate limiting, debounced & full-text search (Mongo Atlas Search)

---

## 🖥️ Frontend Requirements

### 🧰 Tech Stack
- **React + Vite** (or Create React App)
- **State Management:** Redux Toolkit / React Context + localStorage
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Forms & Validation:** Formik + Yup
- **HTTP Requests:** Axios / fetch wrapper
- **Auth:** JWT stored in cookies (or localStorage)
- **Build & Deploy:** Netlify / Vercel

### 📄 Pages & Components

#### Public
- Home  
- Product List (with category & filters)  
- Product Detail  
- Login / Register  
- Cart  
- Checkout  
- Order Confirmation  

#### Authenticated Users
- My Orders  
- Profile (addresses, password change)

#### Admin
- Product Management (CRUD)
- Order Management (CRUD)
- User List

#### Shared Components
- Header (search, auth status)
- Footer
- ProductCard
- CartSidebar
- Pagination
- Notifications / Toasts (`react-toastify`)
- ProtectedRoute

### 🧠 UX Requirements
- Responsive (mobile-first)
- Client-side validation
- Loading states & skeletons
- Persisted cart (localStorage)
- JWT token persistence (cookie or refresh token pattern)

---

## ⚙️ Backend Requirements

### 🧰 Tech Stack
- **Node.js + Express.js**
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT with expiration (5 days)
- **Payments:** Stripe Integration
- **Image Uploads:** Cloudinary or AWS S3
- **Environment Config:** dotenv
- **Security:** helmet, cors, bcrypt, rate-limit

---

### 🧾 Core API Endpoints

#### Auth
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login & get token |
| POST | `/api/auth/refresh` | Refresh token (optional) |
| POST | `/api/auth/logout` | Logout user |

#### Users
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/users/me` | Get logged-in user |
| PUT | `/api/users/me` | Update user profile |
| GET | `/api/users` | Admin: list all users |

#### Products
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/products` | List all products (with filters & pagination) |
| GET | `/api/products/:id` | Product details |
| POST | `/api/products` | Admin: add product |
| PUT | `/api/products/:id` | Admin: update product |
| DELETE | `/api/products/:id` | Admin: delete product |

#### Orders
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/orders` | Create order |
| GET | `/api/orders` | User or admin orders |
| GET | `/api/orders/:id` | Get specific order |
| PUT | `/api/orders/:id/status` | Admin: update status |

#### Payments
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/payments` | Handle Stripe payments (webhooks) |

#### Reviews (optional)
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/products/:id/reviews` | Add review |
| GET | `/api/products/:id/reviews` | Get reviews |

---

## 🧰 Middleware & Security

- Authentication middleware (protect routes)
- Role-based access (admin)
- Input validation
- Centralized error handling
- CSRF protection (if cookies used)
- Rate limiting (for auth routes)

---

## ☁️ Deployment

- **Backend:** Render / Heroku / AWS  
- **Frontend:** Netlify / Vercel  
- Store secrets in environment variables (`.env`)

---

## 🗄️ Database Design (MongoDB + Mongoose)

### User
```js
{
  name,
  email,
  passwordHash,
  role: "user" | "admin",
  addresses: [{ label, street, city, state, postalCode, country }],
  createdAt,
  updatedAt
}
