import app from "./app.js";
import connectionToDB from "./config/db.js";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 5002;

app.listen(PORT, async () => {
  // Ensure the database is connected before starting the server
  try {
    await connectionToDB();
    console.log(`App is running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});
