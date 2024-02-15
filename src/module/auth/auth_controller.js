const { errorResposnse } = require("../../helper/resposnse");
const { jwtSecretKey } = require("../../utils/secret");
const authMolel = require("./auth_model");
const jwt = require('jsonwebtoken');

// login
const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email, and password' });
    }
    try {
        // Check if the user exists
        const user = await authMolel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Check if the password is correct
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, jwtSecretKey, { expiresIn: '1h' });
        const userWithoutPassword = { _id: user._id, email: user.email };
        res.status(200).json({
            message: 'Login successful',
            data: userWithoutPassword,
            token
        });
    } catch (error) {
        console.error('Error during login:', error);
        next(error);
    }
}
// signUp
const signUpController = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email, and password' });
    }
    try {
        // Check if the email already exists
        const existingUser = await authMolel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        // Create a new user
        const newUser = new authMolel({ email, password });
        await newUser.save();
        // Create a JWT token
        const token = jwt.sign({ userId: newUser._id }, jwtSecretKey, { expiresIn: '1h' });
        const userWithoutPassword = { _id: newUser._id, email: newUser.email };
        res.status(200).json({
            message: 'Signup successful',
            data: userWithoutPassword,

            token
        });
    } catch (error) {
        console.error('Error during signup:', error);
        next(error)
    }

}
// forget password
const forgetPassController = (req, res) => {
    res.send('forget');
}
// otp
const sendOTPController = (req, res) => {
    res.send('otp');
}

module.exports = { loginController, signUpController, forgetPassController, sendOTPController };