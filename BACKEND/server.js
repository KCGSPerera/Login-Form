require("dotenv").config();
const http =  require("http");

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  
require("./config/dbConnect");
const app = require("./app/app");

const PORT = process.env.PORT || 2021

// server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is up and running on port ${PORT}`));