const express = require('express')
const mysql = require('mysql2')
const cors = require('cors');
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password' : '',
    'database': 'test'
});

db.connect((err) => {
    if (err) {
      console.log("Error connecting to the database: ", err);
    } else {
      console.log("Connected to the database!");
    }
  });


  app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    console.log(name);
    const sql = "Select * from tasktracker where Email = ?"

    db.query(sql, [email], (err, result) =>{
        if(err){
            console.error("Error querying the database" , err);
            return res.status(501).json({error: 'Internal Error server'});
        }
        if(result.length > 0){
            console.error("user")
            return res.status(400).json({message: 'User Already Registered!'});
        }
        bcrypt.hash(password, 10, (hashErr, hashPassword) =>{
            if(hashErr){
                console.error(hashErr)
                return res.status(500).json({error: "Internal server Error"});
            }
            const sqlInsert = "Insert into tasktracker (Name, Email, Password) values (?,?,?)";
            db.query(sqlInsert, [name, email, hashPassword], (insertError, insertPassword) => {
                if(insertError){
                    console.error(insertError)
                    return res.status(500).json({error: "Internal server Error"})
                }
                console.log("User Registered Successfully!");
                return res.status(200).json({message: "User Registered Successfully!"});
            })
        })

    })
  })

const PORT = 3987;
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
  });

