const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
  } else {
    console.log("Connected to the database!");
  }
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received registration data: ", { name, email, password });

  const sqlCheck = "SELECT * FROM tasktracker WHERE Email = ?";
  db.query(sqlCheck, [email], (err, result) => {
    if (err) {
      console.error("Error querying the database: ", err);
      return res.status(501).json({ error: 'Internal server error' });
    }

    console.log("Database query result: ", result);
    if (result.length > 0) {
      console.log("User already registered with email: ", email);
      return res.status(400).json({ message: 'User Already Registered!' });
    }

    bcrypt.hash(password, 10, (hashErr, hashPassword) => {
      if (hashErr) {
        console.error("Error hashing password: ", hashErr);
        return res.status(500).json({ error: "Internal server error" });
      }

      console.log("Hashed password: ", hashPassword);
      const sqlInsert = "INSERT INTO tasktracker (Name, Email, Password) VALUES (?, ?, ?)";
      db.query(sqlInsert, [name, email, hashPassword], (insertError, insertResult) => {
        if (insertError) {
          console.error("Error inserting user into the database: ", insertError);
          return res.status(500).json({ error: "Internal server error" });
        }

        console.log("User Registered Successfully with email: ", email);
        return res.status(200).json({ message: "User Registered Successfully!" });
      });
    });
  });
});

const PORT = 3987;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
