const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
   
    


    let transporter = nodemailer.createTransport({
      service:"Gmail",
      secure:true,
      auth:{
          user:'akrrajput1@gmail.com',
          pass: 'iwks vfvh lkox ohiw',
      },
  });

  

  //send mail 
  let info = await transporter.sendMail({
      from:`CodeHelp - StudyNotion`,
      to: `${email}`,
      subject: `${title}`,
      html:`${body}`,
  })
    console.log(info.response)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
