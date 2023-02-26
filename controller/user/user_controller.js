const User = require("../../models/user_model");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { emailValid, validation, passwordValid } = require("./userValidation");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRETKEY, { expiresIn: "3d" });
};

const createUser = asyncHandler(async (req, res) => {
  const {
    username,
    password,
    email,
    firstName,
    lastName,
    avatar,
    address,
    location,
  } = req.body;

  try {
    if (!username || !email || !password || !firstName || !lastName)
      throw Error("All fields must be filled");

    validation(email, emailValid);
    validation(password, passwordValid);

    const findUser = await User.findOne({ email });

    if (!findUser) {
      const user = new User({
        username,
        password,
        email,
        firstName,
        lastName,
        avatar,
        address,
        location,
      });

      const saveUser = await user.save();
      const token = createToken(saveUser._id);
      res.status(200).json({
        email,
        username,
        firstName,
        lastName,
        avatar,
        address,
        location,
        token,
      });
    } else {
      throw new Error("User already exists");
    }
  } catch (error) {
    throw Error(error.message);
  }
});

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("All fields must be filled");
    }

    const findUser = await User.findOne({ email });

    if (!findUser) {
      throw new Error("Incorrect email or password");
    }

    const passwordMatch = await findUser.isPasswordMatch(password);

    if (!passwordMatch) {
      throw new Error("Incorrect email or password");
    }

    if (findUser && passwordMatch) {
      const {
        _id,
        email,
        username,
        firstName,
        lastName,
        avatar,
        address,
        location,
      } = findUser;

      const token = createToken(_id);

      res.status(200).json({
        email,
        username,
        firstName,
        lastName,
        avatar,
        address,
        location,
        token,
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  signin,
  createToken,
};
