
# 🏡 Real Estate Listing Website

A full-stack real estate listing website designed to help users manage property listings, contact property owners for bookings, and create accounts using Google OAuth. This site provides an intuitive user experience for exploring, adding, and managing property listings.

## ✨ Features

- **User Authentication**: Google OAuth for secure login and account creation.
- **Property Listings**: Users can add, update, and explore property listings.
- **Contact Property Owners**: Built-in messaging to contact property owners.
- **Image Uploads**: Firebase integration for managing listing images.
- **Responsive Design**: Tailwind CSS for a mobile-friendly experience.
- **State Management**: Redux Toolkit for smooth application state handling.

## 🛠 Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Storage**: Firebase (for image storage)
  
---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (or a MongoDB cloud instance)
- Firebase account for storing images (Firebase Console)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AKushwahaji/Real-state.git
   cd real-estate-listing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the main directory and add the following variables:
     ```plaintext
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=yoursecretlines_what_ever_you_want_to_give
     -add this in the client .env file(firebase key)-
     VITE_FIREBASE_API_KEY=your_firebase_key
     ```

4. **Run the Development Servers**:

   - **Frontend**:
     ```bash
     npm run dev
     ```

   - **Backend**:
     ```bash
     npm start
     ```

5. **Access the Application**:

   Open your browser and navigate to the frontend server’s local URL (e.g., `http://localhost:3000` if using Vite’s default port).

---

## 📁 Project Structure

```plaintext
real-estate-listing/
├── frontend/            # Frontend source code (React, Redux, Tailwind CSS)
├── backend/             # Backend source code (Node.js, Express.js)
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes or enhancements.

---
