// const express= require('express')
// var cors = require('cors');


// const path = require("path");
// __dirname = path.resolve();


// const app = express()
// app.use(cors());
// require('dotenv').config()
// const dbConfig = require('./config/dbConfig')
// const userRoute = require('./routes/userRoute')
// const movieRoute = require('./routes/movieRoute')
// const theatreRoute = require('./routes/theatreRoute')
// const upcomingRoute = require('./routes/upcomingRoute')

// const bookingroute = require('./routes/bookingRoute')

// app.use(express.json())
// app.use('/api/users' , userRoute)
// app.use('/api/movies' , movieRoute)
// app.use('/api/theatres' , theatreRoute)
// app.use("/api/upcoming", upcomingRoute);
// app.use("/api/bookings", bookingroute);


// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "/client/build")));
//     app.get("*", (req, res) => {
//       res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//     });
//   }
  




// app.listen(8082 , ()=>{
//     console.log('Server is Running')
// })

const express = require('express');
var cors = require('cors');
const path = require("path");
const connectDB = require('./config/dbConfig'); // Import the dbConfig

__dirname = path.resolve();

const app = express();
app.use(cors());
require('dotenv').config();

// Connect to MongoDB
connectDB(); // Call the function to connect to the database

const userRoute = require('./routes/userRoute');
const movieRoute = require('./routes/movieRoute');
const theatreRoute = require('./routes/theatreRoute');
const upcomingRoute = require('./routes/upcomingRoute');
const bookingRoute = require('./routes/bookingRoute');

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/theatres', theatreRoute);
app.use("/api/upcoming", upcomingRoute);
app.use("/api/bookings", bookingRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}

app.listen(8082, () => {
    console.log('Server is Running on port 8082');
});
