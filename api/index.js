import express from "express";

const app = express();

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
