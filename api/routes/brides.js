const router = require("express").Router();
const Bride = require("../models/Bride");

// REGISTER brides
router.post("/register", async (req, res) => {
  const data = req.body;
  try {
    Bride.create(data, function (err, data) {
      return res.status(201).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL BRIDES
router.get("/", async (req, res) => {
  try {
    const brides = await Bride.find({});

    res.status(200).json(brides);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET BRIDE
router.get("/:id", async (req, res) => {
  try {
    // const shortnameMan = req.params.man;
    // const shortnameGirl = req.params.girl;
    const bride = await Bride.findById(req.params.id);
    res.status(200).json(bride);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
