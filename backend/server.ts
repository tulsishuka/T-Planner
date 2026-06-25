
import dotenv from "dotenv";
import { connectDB } from "./config/database.config";
import app from "./app";

dotenv.config(); 
console.log("SERVER KEY:", process.env.GEMINI_API_KEY);

const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Server failed:", error);
    process.exit(1);
  }
};

startServer();