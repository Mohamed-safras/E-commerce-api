const validator = require("validator");

const passwordValidationOptions = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
  returnScore: false,
  pointsPerUnique: 1,
  pointsPerRepeat: 0.5,
  pointsForContainingLower: 10,
  pointsForContainingUpper: 10,
  pointsForContainingNumber: 10,
  pointsForContainingSymbol: 10,
};

const passwordValid = (password) => {
  if (!validator.isStrongPassword(password, passwordValidationOptions)) {
    throw new Error(
      `Password not strong enough!,The minimum password length must be ${
        passwordValidationOptions.minLength
      } characters, at least ${
        passwordValidationOptions.minLowercase
      } lowercase ${
        passwordValidationOptions.minLowercase > 1 ? "letters" : "letter"
      } , at least ${passwordValidationOptions.minUppercase} uppercase ${
        passwordValidationOptions.minLowercase > 1 ? "letters" : "letter"
      }, at least ${passwordValidationOptions.minNumbers} ${
        passwordValidationOptions.minLowercase > 1 ? "numbers" : "number"
      },and at least ${passwordValidationOptions.minSymbols} ${
        passwordValidationOptions.minSymbols > 1 ? "symbols" : "symbol"
      } included`
    );
  }
};

const emailValid = (email) => {
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
};

const validation = (filed, callback) => {
  return callback(filed);
};

module.exports = {
  emailValid,
  validation,
  passwordValid,
};
