const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../utils/secret');


// Verify token middleware
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(403).json({ message: 'Token not provided' });
    }
  
    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.userId = decoded.userId;
      next();
    });
}


module.exports =verifyToken;
