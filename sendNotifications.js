const nodemailer = require("nodemailer");
const path  = require("path");
const  fs = require('fs').promises;


// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    const file = await fs.readFile("./public/message/welcome.html",{"encoding":"utf-8"}).then((data)=>{
        console.log("readed file is ");
        // console.log(data);
        return data;
    })
    console.log("testing the process.argv");
    console.log(process.argv);
    console.log(process.env.username);
    console.log(process.env.pwd);
  let transporter = nodemailer.createTransport({
    // host: "gmail",
    service:"gmail",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.username, 
      pass: process.env.pwd, 
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'blogsawblogs@gmail.com', // sender address
    to: 'vaibhavces@gmail.com', // list of receivers
    subject: "Hello ✔", // Subject line
    html: file
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
