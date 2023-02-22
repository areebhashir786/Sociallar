const nodeMailer = require('nodemailer');

exports.sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "20f119dce6bac0",
            pass: "a41448b123f27a"
        }
    });

    const mailOptions = {
        from: "areeb.hashir12@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
    await transporter.sendMail(mailOptions);
}