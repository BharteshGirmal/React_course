const jwt = require("jsonwebtoken");
var JWT_SCERET = "jsonwebtoken";
const fetchuser = (req, res, next) => {
  // Next function gets called after this

  const token = req.headers("auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ error: "Please authenticate using valid token." });
  }

  try {
    const data = jwt.verify(token, JWT_SCERET);
    res.user = data.user;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ error: "Please authenticate using valid token." });
  }
};
module.exports = fetchuser;
