const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

// Configure CORS options
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      "http://localhost:3000",
      "https://nutri-track-orcin.vercel.app"
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS")); // Block the request
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

// Apply CORS middleware with the options
app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend is working" });
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/note", require("./routes/note"));

app.listen(port, () => {
  console.log(`Nutri track app listening on port http://localhost:${port}`);
});
