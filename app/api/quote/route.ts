import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, address, drivewayWidth, message } = body;

    // Validate required fields
    if (!name || !phone || !address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // If Resend is configured, send email
    if (
      resend &&
      process.env.QUOTE_TO_EMAIL &&
      process.env.QUOTE_FROM_EMAIL
    ) {
      try {
        await resend.emails.send({
          from: process.env.QUOTE_FROM_EMAIL,
          to: process.env.QUOTE_TO_EMAIL,
          subject: `New Quote Request from ${name}`,
          html: `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            ${drivewayWidth ? `<p><strong>Driveway Width:</strong> ${drivewayWidth}</p>` : ""}
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
            <hr />
            <p><small>Submitted from The Snow Guy website</small></p>
          `,
        });
        console.log("✅ Quote request email sent successfully");
      } catch (emailError) {
        console.error("❌ Failed to send email via Resend:", emailError);
        // Continue anyway - we still want to return success to the user
      }
    } else {
      // Log quote details when email is not configured
      console.log("📋 New quote request received (email not configured):");
      console.log(JSON.stringify({ name, phone, address, drivewayWidth, message }, null, 2));
    }

    return NextResponse.json(
      { success: true, message: "Quote request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


