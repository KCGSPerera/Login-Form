require("dotenv").config();
const http =  require("http");
// const cors = require('cors');
  
require("./config/dbConnect");
const app = require("./app/app");

// app.use(cors());

// app.use(
//     cors({
//       origin: "http://localhost:5173",
//     //   credentials: true,
//     })
//   );


const PORT = process.env.PORT || 2021

// server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is up and running on port ${PORT}`));