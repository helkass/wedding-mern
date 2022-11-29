const router = require("express").Router();
const CryptoJS = require("crypto-js");
const Auth = require("../models/Auth");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new Auth({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });

  try {
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN ADMIN
router.post("/login", async (req, res) => {
  try {
    const user = await Auth.findOne({ email: req.body.email });

    !user && res.status(400).json({ error: "email invalid!" });

    // hashing
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;

    // compare password
    originalPassword != inputPassword && res.status(401).json("Wrong Password");
    // const accessToken = jwt.sign(
    //   {
    //     id: user._id,
    //   },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1d" }
    // );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
