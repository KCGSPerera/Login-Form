const Login = require("../model/Login");

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