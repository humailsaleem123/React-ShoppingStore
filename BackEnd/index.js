const express = require("express");

const mysql = require("mysql");

const cors = require("cors");

const { reset } = require("nodemon");

const app = express();

const fs = require('fs');

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "shopping store",
});

db.connect((error) => {
          if (error) {
                    console.warn("error");
          } else {
                    console.warn("connected");
          }
});

// db.query("select * from users", (err, result) => {
//           console.warn("result", result);
// });

// app.get("/users", (req, res) => {
    
//     db.query(
//         "SELECT * FROM user" ,

//         (err , result) => {
//             console.log(err);

//             res.send(result);
//         }
        
//     )
    
   


// });
 // res.send("list of all users");


app.post("/register", (req, res) => {

    const FullName = req.body.fullName;

    const Email = req.body.email;

    const username = req.body.userNameReg;

    const password = req.body.passwordReg;



    db.query(
        "INSERT INTO users (FullName, Email, UserName, Password) VALUES ( ?, ? , ? , ?)",
        [FullName, Email, username, password],
        (err, result) => {
            console.log(err);
            
        }
       
    );

});

app.post("/login" , (req , res) => {
    
    const loginUsername = req.body.userName;
    const loginPassword = req.body.password;
    var data = {
        "UserName": '1',
        "Name": "musab",
        "MobileNO":131312 ,
        "PaymentMethodID": 1,
        "PaymentMethod": "ere",
        "ChqueNO":11,

        "DonationTypeID": 1,
        "DonationType": "test",
        "Amount": 2
        //"rememberme": $("#rememberme").prop("checked")
    };



    console.log("response","wewe");
    let request = require('request');

            request.post({
            headers: {'content-type' : 'application/json'},
            url:     'https://localhost:44340/AddFund/Add',
            body:    JSON.stringify(data)
            }, function(error, response, body){
            console.log("response",response);
      });



    db.query(
        "SELECT * FROM users WHERE UserName = ? AND Password = ?",

        [loginUsername , loginPassword],

        (err , result) => {

            if(err){
                res.send({err : err});
            }
            if(result.length > 0){
                res.send(result);
                console.log(result);
            }
      
            else{
                res.send({
                    message : " * wrong username and password",
                });
            }
        }
    );
});




app.get("/users", (req , res) => {

    db.query(

        "SELECT * FROM users",

        (err , result) => {

            if(err){
                console.log(err);
            }
          else{
            res.send(result);
          }

          
        }

    )
});




app.delete("/delete/:id" , (req , res) => {
    const id = req.params.id;

    db.query(
        "DELETE FROM users WHERE id = ?", 
        id , 
        (err , result)=> {
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
        }
    )
})



app.put('/update', ( req , res ) => {

    const id = req.body.id;
    // const fullName = req.body.FullName;
    // const Email = req.body.email;
    const userName = req.body.UserName;
    const password = req.body.Password;

    db.query(

        "UPDATE users SET UserName=? , Password=?  WHERE id = ?" , 

        [ userName  , password ,  id ], 
        (err , result) => {

            console.log(userName  , password , id);
            
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
        }
    )

})

app.get("/products" , (req , res) => {


    db.query(

        "SELECT * FROM products",

        (err , result) => {

            if(err){
                console.log(err);
            }
            else{
                console.log(result);
                res.send(result);
            }
            console.log(result);
        }
    )


})



// app.post("/login", (req, res) => {

//     const username = req.body.username;

//     const password = req.body.password;

//     db.query(
//         "SELECT * FROM user WHERE username = ? AND password = ?",
//         [username, password],
//         (err, result) => {
//             if (err) {
//                 res.send({ err: err });
//             }

//             if (result.length > 0) {
//                 res.send(result);
//             } else {
//                 res.send({
//                     message: "wrong username / password",
//                 });
//             }
//         }
//     );
// });

app.listen(4000, () => console.log("server is running !!!!! "));
