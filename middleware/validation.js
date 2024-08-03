const { check, validationResult } = require("express-validator");

const validateRegistration = [
  check("fullName", "Full Name is required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password must be 6 or more characters").isLength({
    min: 8,
  }),
  check("phoneNumber", "Phone Number is required").not().isEmpty(),
  check("birthDate", "Birth Date is required").not().isEmpty(),
  check("gender", "Gender is required").not().isEmpty(),
  check("address.streetAddress", "Street Address is required").not().isEmpty(),
  check("address.country", "Country is required").not().isEmpty(),
  check("address.city", "City is required").not().isEmpty(),
  check("address.region", "Region is required").not().isEmpty(),
  check("address.postalCode", "Postal Code is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateLogin = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateRegistration, validateLogin };
