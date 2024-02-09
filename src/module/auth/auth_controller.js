
// login
const loginController =(req,res)=>{
    res.send('login');
}
// signUp
const signUpController =(req,res)=>{
    res.send('signUp');
}
// forget password
const forgetPassController =(req,res)=>{
    res.send('forget');
}
// otp
const sendOTPController =(req,res)=>{
    res.send('otp');
}

module.exports={loginController,signUpController,forgetPassController,sendOTPController};