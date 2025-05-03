# 🏢 Apartment Listing App
A full-stack apartment listing application with a Node.js/TypeScript backend, a React frontend, and MongoDB for data storage — all containerized using Docker Compose.

## 🚀 Getting Started

### 📦 Prerequisites
Docker and Docker Compose installed

### ⚙️ Setup & Run
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/apartment-listing.git
   cd apartment-listing
2. **Start the application**:
   ```bash
   docker-compose up --build
3. **Access the app**:
   - *Frontend:* http://localhost:3000
   - *Backend API:* http://localhost:5000/api/apartments
   - *MongoDB:* accessible internally at mongodb://mongo:27017/apartment-db

### 🧪 Seeding the Database
The database is seeded automatically before the backend starts using the script in server/src/seed/seed.ts.

### 🛑 Stopping the App
   ```bash
   docker-compose down
