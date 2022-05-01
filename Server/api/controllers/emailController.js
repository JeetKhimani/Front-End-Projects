const nodemailer = require('nodemailer')

exports.sendmail = (req, res) => {
    const obj = req.body
    console.log(obj);


let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"wedesignrcb@gmail.com",
        pass:"rcbwebdesign"
    },
    tls:{
        rejectUnauthorized: false,
    },
})

transporter.sendMail({
    from:"wedesignrcb@gmail.com",
    to:"khimani.j@northeastern.edu",
    subject:"Query from User",
    text:"Hi..."+"This is a query from "+obj.username+"   "+obj.query
});
res.json({msg:"successfully"});
}