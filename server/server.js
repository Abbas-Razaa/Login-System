const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const users = [
  { id: 1, email: "admin@gmail.com", password: "admin123", role: "admin", isActive: true },
];


const SECRET_KEY = "your_secret_key";

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;


  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if (!user.isActive) {
    return res.status(403).json({ error: "Your account is deactivated. Please contact support." });
  }


  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });
  return res.json({ token });
});


app.get("/api/protected", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Access denied. Admins only." });
    }
    res.json({ message: "Welcome, Admin!", data: decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
