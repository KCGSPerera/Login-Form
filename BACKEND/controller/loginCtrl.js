const Login = require("../model/Login");
const mongoose = require('mongoose');

// register user
exports.registerUser = async (req, res) => {
    const { firstname, 
            lastname, 
            phonenumber, 
            address1, 
            address2, 
            email, 
            age, 
            password 

    } = req.body;

    // check if email exist
    const userFound = await Login.findOne({email});
    if(userFound){
        throw new Error("User exists");
    }

    // register
    const user = await Login.create({
        firstname,
        lastname,
        phonenumber,
        address1,
        address2,
        age,
        password,
        email

    });
    res.status(201).json({
        status: "Success",
        data: user,
        message: "User registered successfully...",
    }); 
};

// update user
exports .updateUser = async (req,res) => {

    const { firstname, lastname, email, password, age, phonenumber, address1, address2 } = req.body;

    const emailFound = await Login.findOne({email});

    if(!emailFound){
        res.status(404).json({message:"User not exists..."})
    }

    const user =  await Login.findByIdAndUpdate(req.params.id, {
        firstname,
        lastname,
        email,
        phonenumber,
        address1,
        address2,
        age,
        password

    },
    {
        new: true,
        // runValidators: true,
    });
    res.status(200).json({
        data: user,
        status: "success",
        message: "User updated successfully",
    });


}

// get one user
exports.getUserCtrl = async (req, res) => {
    
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

    const user = await Login.findById(req.params.id);

    if(!user){
        res.status(404).json({message: "The user not found..."})
    }

    res.status(200).json({
        data: user,
        status: "success",
        message: "User fetched successfully",
    })
} catch(error){
    res.status(400).json({ message: error.message });
}
}

// get all users
exports.getUsersCtrl = async (req,res) => {

    const users = await Login.find();

    if(!users){
        res.status(404).json({message: "No users found..."})
    }

    res.status(200).json({
        data: users,
        status: "success",
        message: "All users fetched succesfully...",
    });
}

// delete user 
exports.deleteUser = async (req,res) => {

    const user = await Login.findByIdAndDelete(req.params.id);

    if(user){
        res.status(200).json({
            ststus: "Success",
            message: "User deleted successfully",
            data: user,
        });
       
    } else{
        res.status(404).json({
            message: "Failed to delete the the user..."
        })
    }
}