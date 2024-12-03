export default async function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, address, date, service } = req.body;
  
      // Here you can process the data, e.g., save to database or send email
      console.log("Booking Received:", { name, email, address, date, service });
  
      // Send a success response
      res.status(200).json({ message: "Booking received!" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  }
  