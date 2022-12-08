const router = require("express").Router();
const Bride = require("../models/Bride");

// REGISTER brides
router.post("/register", async (req, res) => {
  const form = req.body;
  const newBride = new Bride(form)
  try {
    const data = await newBride.save();
    res.status(200).json(data) 
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
    const bride = await Bride.findById(req.params.id);
    res.status(200).json(bride);
  } catch (err) {
    res.status(500).json(err);
  }
});

// bug
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  // const documents = await Bride.get().collection('brides');

  try {
    if(id){
      await Bride.findByIdAndDelete(id)
      return res.status(200).json({message: "delete success!"}) 
    }
  } catch (error) {
    res.status(500),json({error: "delete failure!"})
  }
})
module.exports = router;
