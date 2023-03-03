const jwt = require("jsonwebtoken");
const user_model = require("../models/user_model");
const requireAuth = async (req, res, next) => {
  const { Authorization } = req.header;

  if (!Authorization) {
    return res
      .status(401)
      .json({ error: "You must be logged in to access this resource" });
  }

  const token = Authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.SECRETKEY);
    req.user = await user_model.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({ error: "Request not Authorized" });
  }
};

module.exports = requireAuth;
