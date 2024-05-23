// middleware/auth.js

const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const authMiddleware = () => {
  return async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(401).json({ message: "Invalid token." });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(400).json({ message: "Invalid token." });
    }
  };
};

module.exports = authMiddleware;
