const errorResposnse = (
    res,
    { statusCode = 500, message = "Internal Server Erroe" }
  ) => {
    return res.status(statusCode).json({
      success: false,
      message,
    });
  };
  
  const successResposnse = (
      res,
      { statusCode = 200, message = "Success" ,payload={}}
    ) => {
      return res.status(statusCode).json({
        success: true,
        message,
        payload
      });
    };
  
  module.exports = { errorResposnse ,successResposnse};