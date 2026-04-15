const mailsender = require("nodemailer");

const authentication_= mailsender.createTransport({

    service: "gmail",
    auth:{
        user:'yeilwaed@gmail.com',
        pass:'mwvk hayd oxhl qmjw'
    }
    
});
const mailOptions = {
from:'yeilwaed@gmail.com',
to: 'yoelwgerye@hotmail.com',
subject: 'Test from node.js',
text:'test from node.js'
    }
    authentication_.senderMail(mailOptions, (err, info) =>{
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    });