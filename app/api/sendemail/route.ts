import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


export async function GET(request: NextRequest) {
    const resend = new Resend('re_95fnc8Lt_GpE7Bp6CVY3JWCZs5W5oGQLd');
  
    try {
      const response = await resend.emails.send({
        from: 'preciousoguname@gmail.com',
        to: 'ogunameprecious123@gmail.com',
        subject: 'enquiry',
        html: '<h1>hello precious</h1>',
      });
  
      // Destructure the response to access data (assuming it exists)
      const { data } = response;
  
      return NextResponse.json({ data });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }