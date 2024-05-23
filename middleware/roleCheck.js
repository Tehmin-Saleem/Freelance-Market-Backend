// middleware/roleCheck.js

const roleCheck = (role) => {
  return (req, res, next) => {
    const userRole = req.user.role; // Assuming the user role is extracted and available

    if (userRole !== role) {
      return res
        .status(403)
        .json({ message: "Access forbidden for this role." });
    }

    next(); // Allow access for the specified role
  };
};

module.exports = roleCheck;
