import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Add timestamp and IP (if available)
    const leadData = {
      ...formData,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data', 'leads');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Save lead to JSON file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `lead-${timestamp}.json`;
    const filepath = path.join(dataDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(leadData, null, 2));

    // TODO: Send email notification
    // This is a stub - you can integrate with your preferred email service
    console.log('New lead received:', {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      serviceType: formData.serviceType,
      timestamp: leadData.timestamp
    });

    // Email notification stub (replace with actual email service)
    if (process.env.NOTIFICATION_EMAIL) {
      // Example integration points:
      // - SendGrid: await sendEmail(process.env.NOTIFICATION_EMAIL, 'New Lead', emailBody);
      // - Nodemailer: await transporter.sendMail({ to: process.env.NOTIFICATION_EMAIL, subject: 'New Lead', text: emailBody });
      // - Resend: await resend.emails.send({ from: 'leads@thesnowguy.com', to: process.env.NOTIFICATION_EMAIL, subject: 'New Lead', html: emailBody });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Lead submitted successfully',
      leadId: filename 
    });

  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
