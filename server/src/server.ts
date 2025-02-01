import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!________");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is still running on http://localhost:${PORT}`);
});
