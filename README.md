Coffee House aims to simplify organizing 🏕️ and participating in Coffee House for both administrators and users. It offers features such as managing camps, participant registration, payments 💳, and communication 📩, ensuring a seamless user experience.

---

## 🔗 Live Link
[🌐 Coffee-house](https://coffee-house-f229b.web.app/)

## Features 🛠️

### Admin Panel 🧑‍💻
1. **Admin Dashboard** 📊:
   - Displays graphical representations of data (e.g., users statistics, participant counts, and payments).
   - Overview of total users, participants, and earnings.

2. **Admin Profile** 👤:
   - View and manage personal information.
   - Option to update details (email, name, password, etc.).

3. **Add user** 🏕️:
   - Add new user with all necessary details like name, location, date, time, and fees.

4. **Manage users** ✏️🗑️:
   - Edit or delete existing user.

5. **Manage Registered users** ✅❌:
   - Approve, reject, or mark participants as pending.
   - View participant details for each Coffee House.

6. **All Users** 🔄👥:
   - Manage all users (Admin, Moderator, Member).
   - Switch roles and delete users.

7. **Upload Photos** 📸:
   - Upload images to maintain a gallery for showcasing users activities.

8. **Create Articles** 📝:
   - Write articles for sharing news, updates, or health tips.

---

### User Panel 👥
1. **Analytics** 📈:
   - View user activity (e.g., users joined, payments made).

2. **Join Coffee House** 🏕️:
   - Easily join any Coffee House with real-time registration.

3. **Payment Integration** 💳:
   - Secure payment via Stripe for Coffee House fees.

4. **Profile Management** 👤:
   - Update personal details and view profile information.

5. **Manage Registered users** 🛠️:
   - View and manage joined users, including payment and participation status.

6. **Message Admin** 📩:
   - Send direct messages to the admin for inquiries.

7. **Articles** 👍💬:
   - Like, comment, and share admin-created articles.

---

### Additional Features ✨
- **Popular users** 🌟: Highlight Coffee House with the most participants.
- **Top Participants** 🏅: Showcase the most active participants.
- **Reviews** ✍️: Allow users to review Coffee House.
- **Contact** 📞: Dedicated contact page for inquiries.
- **Dark Mode** 🌗: Toggle between light and dark themes.

---

## Technologies Used ⚙️

### Frontend 🌐
- **React (Vite)**: Fast development environment and reactive UI.
- **TailwindCSS**: Modern utility-first CSS framework for styling.
- **Material UI** and **DaisyUI**: Component libraries for pre-designed elements.
- **TanStack Query**: Efficient state and data management.
- **React Router DOM**: For seamless navigation between pages.
- **Lottie React**: Animations for interactive experiences.
- **Axios**: For API calls.
- **Chart.js**: Visualize analytics data.

### Backend 🛠️
- **Express.js**: Backend framework for REST API development.
- **MongoDB**: NoSQL database for scalable data storage.
- **JWT**: Secure user authentication and session handling.
- **Firebase**: Simplified authentication management.
- **Cookie-parser**: For managing cookies in HTTP requests.

### Payment Gateway 💳
- **Stripe**: For secure and reliable payment integration.

---

## Dependencies 📦

### Frontend Dependencies
- Libraries for animations: `aos`, `lottie-react`.
- React tools: `react-router-dom`, `react-icons`, `react-hook-form`.
- Analytics & Charts: `chart.js`, `react-chartjs-2`, `recharts`.
- Notifications: `react-toastify`, `sweetalert2`.
- Payment: `@stripe/react-stripe-js`, `@stripe/stripe-js`.

### Backend Dependencies
- Authentication: `jsonwebtoken`, `cookie-parser`.
- Database: `mongodb`, `mongoose`.
- Payments: `stripe`.
- Environment Management: `dotenv`.

---

## Implementation Plan 🛠️

### Frontend Development:
1. Set up **React** with **Vite**.
2. Design pages for Admin Dashboard, User Dashboard, and common features.
3. Integrate `react-router-dom` for navigation.
4. Add state management with **TanStack Query**.

### Backend Development:
1. Build REST APIs with **Express.js**.
2. Set up MongoDB collections for users, camps, and registrations.
3. Implement **JWT authentication**.

### Integration:
1. Connect frontend and backend using **Axios**.
2. Add Stripe for secure payments.
3. Test API routes and data flow.

### Testing:
1. Test functionalities like login, registration, Coffee House management, and payments.
2. Ensure responsiveness and accessibility.

---

## Outcome
A fully functional Coffee House Management System where:
- **Admins** can manage all aspects of Coffee House.
- **Users** can join Coffee House, manage profiles, and interact with the admin.
- The system is scalable, secure, and user-friendly. 🎯




# Installation 🛠️

**npm install**

### Prerequisites:
- **Node.js**: Ensure Node.js is installed on your system.
- **React**: Ensure React vite is installed on your system.
- **MongoDB**: A running MongoDB server locally or a connection string for MongoDB Atlas.
- **Stripe**: A Stripe account for payment setup.

---

### Steps to Install:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/imon130307/coffee-house-client-side
   cd coffee-house-client-side