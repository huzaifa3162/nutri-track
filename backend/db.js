// const mongoose = require('mongoose');

// // const mongoURI = "mongodb://localhost:27017/carevibe";

// const connectToMongo = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://huzaifa:huzaifa730@wstlab.9ajtr.mongodb.net/?retryWrites=true&w=majority&appName=wstlab', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//           });
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Failed to connect to MongoDB", error);
//     }
// };

// module.exports = connectToMongo;

const mongoose = require("mongoose");

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb+srv://huzaifa:huzaifa730@wstlab.9ajtr.mongodb.net/wstlab', {
            // No need for useNewUrlParser or useUnifiedTopology
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

module.exports = connectToMongo;
