import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';



async function getRequestBody(request: NextRequest) {
    const requestClone = request.clone();
    const body = await requestClone.json();
  
    return body ;
  }

export async function POST(request: NextRequest) {
    


    const {  name,
        companyName,
        phoneNumber,
        email,
        enquire} = await getRequestBody(request);

        const mailData = {
            from: `"Form Submission" ${email}`,  
            to: 'info@formosa6js.com, formosa6js@gmail.com',  
            subject: `Enquiry from ${name} - ${companyName} Regarding Formosa Oil and Gas`,
            text: `
              Name: ${name}
              Company Name: ${companyName}
              Email: ${email}
              Phone Number: ${phoneNumber}
              Enquiry: ${enquire}
            `,
          };
    
      const transporter = nodemailer.createTransport({
        host: 'lucy.mxrouting.net', // Replace with your SMTP host
        port: 25, 
        // 143// Replace with your SMTP port
        // 993 
        // 995
        // 110

        // 587
        // 465
        // 25
        secure: true, // Adjust based on your SMTP server configuration
        auth: {
          user: 'info@formosa6js.com', // Replace with your email address
          pass: '$sdfsd&!Adsf43aas', // Replace with your email password (consider using environment variables)
        },
      });
      try {
    
    
        
    
          const info = await transporter.sendMail(mailData);
          console.log('Email sent:', info.response);
          return new Response(JSON.stringify({
            message: 'Email sent successfully.',
            status: 200
          }), { status: 200 });
      } catch (error) {
        console.error('Error processing POST request:', error);
        return new Response(JSON.stringify({
          message: 'Error receiving or saving data.',
          status: 500
        }), { status: 500 });
      }
    }



// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

 



//   try {
  
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }
