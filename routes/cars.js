const { Router } = require("express");
const Car = require("../models/Car");

const router = new Router();

router.get("/", async (req, res) => {
    try {
        const cars = await Car.get();
        res.status(200).json({ data: cars });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;