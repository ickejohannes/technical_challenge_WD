const Phone = require("../models/Phone.model");

const router = require("express").Router();

router.get("/phones", async (req, res, next) => {
    try {
        const phones = await Phone.find();
        res.status(200).json({ message: "Found phones", phones });
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

router.get("/phones/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const phone = await Phone.findById(id);
        res.status(200).json({ message: "Found phone", phone });
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;