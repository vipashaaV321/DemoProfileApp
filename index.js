const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const nodemailer = require("nodemailer");
const db=require('./query');
const app=express();
const port=3333;
app.use(cors());
// app.use(ra origin: "*" );
app.use(bodyparser.json());
app.use(
    bodyparser.urlencoded({
        extended:true,
    })
);
// define a sendmail endpoint, which will send emails and response with the corresponding status
// app.post("/sendmail", (req, res) => {
//     console.log("request came");
//     let user = req.body;
//     sendMail(user, (err, info) => {
//       if (err) {
//         console.log(err);
//         res.status(400);
//         res.send({ error: "Failed to send email" });
//       } else {
//         console.log("Email has been sent");
//         res.send(info);
//       }
//     });
//   });
app.post('/addsignup',db.addsignup);
app.post('/addbusiness',db.addbusiness);
app.get('/getsignup',db.getsignup);

app.post('/adddetails',db.adddetails);
app.get('/getdetails',db.getdetails);
app.post('/getlogin',db.getlogin);
app.post('/getbusinessbyid/:sid',db.getbusinessbyid);
app.get('/getsignupbyid/:sid',db.getsignupbyid);
app.get('/getdetailsbyid/:sid',db.getdetailsbyid);

app.delete('/deletebusiness/:sid',db.deletebusiness);
app.delete('/deletesignup/:sid',db.deletesignup);
app.delete('/deletedetails/:sid',db.deletedetails);

app.put('/updatebusiness',db.updatebusiness);
app.put('/updatesignup',db.updatesignup);
app.put('/updatedetails',db.updatedetails);

app.get('/',(request,response)=>{
    response.json({info:'Node.js,Express, and Postgres API'});
});
app.listen(port,()=>{
    console.log(`App running on port ${port}.`);
})