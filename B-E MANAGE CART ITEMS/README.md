# Node.js + MySQL Backend (Manage Cart Items)

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Import this MySQL table:

   ```sql
   CREATE TABLE cart (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255),
     description VARCHAR(255),
     price INT
   );
   ```

3. Start server:
   ```
   npm start
   ```

Server runs on http://localhost:4000
