const mongoose = require("mongoose");
const bycrpt = require("bcrypt");
// const Email = new mongoose.Schema({
//   address: {
//     type: String,
//     lowercase: true,
//     required: [true, "can't be blank"],
//     // match: [/\S+@\S+\.\S+/, "is invalid"],
//     index: true,
//   },
//   // Change the default to true if you don't need to validate a new user's email address
//   validated: { type: Boolean, default: false },
// });

const Point = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      lowercase: true,
      index: true,
      unique: true,
    },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    avatar: { type: String, required: false },
    address: {
      street1: String,
      street2: String,
      city: String,
      state: String,
      country: String,
      zip: String,
      location: {
        type: Point,
        required: false,
      },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      default: "user",
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  const salt = await bycrpt.genSaltSync(10);
  this.password = await bycrpt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatch = async function (enterPassword) {
  return await bycrpt.compare(enterPassword, this.password);
};

module.exports = mongoose.model("users", userSchema);
