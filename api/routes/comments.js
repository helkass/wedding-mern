const router = require("express").Router();
const Bride = require("../models/Bride");
const Comments = require("../models/Comments");

// POST COMMENT
router.post("/:id", async (req, res) => {
  try {
    const brideId = await Bride.findById(req.params.id);

    if (!brideId) {
      res.status(400).json({ error: "agenda not found!" });
    } else {
      const newComment = new Comments({
        bride_id: brideId._id,
        username: req.body.username,
        comment: req.body.comment,
        status: req.body.status,
      });

      const saved = await newComment.save();
      res.status(201).json(saved);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL COMMENTS
router.get("/", async (req, res) => {
  try {
    const comment = await Comments.find({});

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL COMMENTS BY BRIDE ID
router.get("/:id", async (req, res) => {
  const filter = { bride_id: req.params.id };
  try {
    const comment = await Comments.find(filter);
    if (!comment) {
      return res.status(400).json("comments not found!");
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Comments.findByIdAndDelete(req.params.id);
    res.status(200).json("Comment has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
