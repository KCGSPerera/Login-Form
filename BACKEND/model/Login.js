const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        phonenumber: {
            type: Number,
            required: true,
        },
        address1: {
            type: String,
            required: true,
        },
        address2: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timeStamp: true,
    }
);

const Login = mongoose.model("Login", loginSchema);
module.exports = Login;