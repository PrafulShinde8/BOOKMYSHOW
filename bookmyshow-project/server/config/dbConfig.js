// const mongoose = require('mongoose')



// mongoose.connect(process.env.mongo_url)
// const connection = mongoose.connection

// connection.on('connected' , ()=>{
//     console.log('Connection Succesful')
// })


// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect(process.env.mongo_url, {
//     useNewUrlParser: true, // Use the new URL string parser
//     useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
// })
// .then(() => {
//     console.log('Connection Successful');
// })
// .catch((error) => {
//     console.error('MongoDB connection error:', error.message);
//     process.exit(1); // Exit process with failure
// });

// // Export the connection for use in other modules
// const connection = mongoose.connection;

// connection.on('error', (err) => {
//     console.error('MongoDB connection error:', err.message);
// });

// module.exports = connection; // Optional: export the connection if needed elsewhere
const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_url, {
            useNewUrlParser: true, // Use the new URL string parser
            useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
        });
        console.log('Connection Successful');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

// Export the connection function for use in other modules
module.exports = connectDB;
