const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');

const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'HARSH',
  database: 'node-database',
};
let EMAIL;
const connection = mysql.createConnection(dbConfig);


connection.connect((err) => {
if (err) {
console.error('Error connecting to database:', err);
return;
}
console.log('Connected to database');
});


app.post("/", (req, res) => {
  try {
    const { emailID, password } = req.body;

    // Log emailID and password to the console
    console.log("Email:", emailID);
    console.log("Password:", password);
    EMAIL = emailID;
    
    // Construct and execute a SQL query to check if the email exists in the table
    const query = `SELECT * FROM logindetail WHERE username = ?`;
    
    connection.query(query, [emailID], (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "Error while running the query " });
      }
    
      if (results.length > 0) {
        console.log("Email found in the table.");
        // Handle the case where the email exists in the table
    
        const storedPassword = results[0].password;
    
        // Check if the stored password matches the provided password
        if (storedPassword == password) {
          console.log("Email and password match.");
          return res.status(200).json({ message: "Email and password match." });
        } else {
          console.log("Password does not match.");
          return res.status(200).json({ message: "Invalid email or password." });
        }
      } else {
        console.log("Email not found in the table.");
        // Handle the case where the email doesn't exist in the table
        return res.status(200).json({ message: "Email is not present" });
      }
    });
    

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
});
app.post("/signup", (req, res) => {
  try {
    const { emailId, password } = req.body;

    // Log emailID and password to the console
    console.log("Email:", emailId);
    console.log("Password:", password);
    EMAIL = emailId;
    
    // Construct and execute a SQL query to check if the email exists in the table
    const query = `SELECT * FROM logindetail WHERE username = ?`;
    
    connection.query(query, [emailId], (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "server error" });
      }
    
      if (results.length > 0) {
        console.log("HURRY! Email found in the table.");
        return res.status(200).json({message: "Account alredy created! Go to login page"});
      }
        // Handle the case where the email exists in the table
      else {
        // chat gpt code here......
        const queryInsertUser = `INSERT INTO logindetail (username, password) VALUES (?, ?)`;

        connection.query(queryInsertUser, [emailId, password], (err, insertResult) => {
          if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).json({ message: "Error creating account." });
          }

          console.log("User registered successfully!");
          return res.status(201).json({ message: "Account created successfully! You can now log in." });
        });
      }
    });
    

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
});
app.post("/resetpassword", (req, res) => {
  try {
    const { emailId, password } = req.body;

    // Log emailID and password to the console
    console.log("Email:", emailId);
    console.log("Password:", password);
    EMAIL = emailId;
    
    // Construct and execute a SQL query to check if the email exists in the table
    const query = `SELECT * FROM logindetail WHERE username = ?`;
    
    connection.query(query, [emailId], (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "server error" });
      }
    
      if (results.length > 0) {
        console.log("HURRY! Email found in the table.");
        
      }
      else{
        console.log("First Create a account!")
        return res.status(200).json({message:"First Create a account!"})
      }

      if(results.length > 0){
        const storedPassword = results[0].password;
    
        // Check if the stored password matches the provided password
        if (storedPassword == password){
          console.log("USER ENTERED THE SAME PASSWORD");
          return res.status(200).json({message:"Can't enter the same password again"});
        }
        else{
          //chat gpt code here
          const updateQuery = `UPDATE logindetail SET password = ? WHERE username = ?`;
          connection.query(updateQuery, [password, emailId], (updateErr, updateResults) => {
            if (updateErr) {
              console.error("Error updating password:", updateErr);
              return res.status(500).json({ message: "Error updating password" });
            }
    
            console.log("Password updated successfully!");
            return res.status(200).json({ message: "Password updated successfully!" });
          });
        }

      }
        // Handle the case where the email exists in the table
      
    });
    

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
