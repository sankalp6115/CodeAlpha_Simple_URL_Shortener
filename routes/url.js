const express = require('express');
const {handleGenerateNewShortURL, handleGetAnalytics} = require("../controllers/url")
const router = express.Router();
const {URL} = require("../models/url");
const shortid = require('shortid');


router.post("/", handleGenerateNewShortURL); 

router.get("/:shortId", async (req,res) => {
    const shortURL = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId: shortURL
    },
    {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            },
        },
    },
    {
        new: true
    })

    if(!entry){
        return res.status(404).json({error: "Entry not found"});
    }
    res.redirect(entry.redirectURL)
})

router.get("/analytics/:shortId", (req, res) => {
    return handleGetAnalytics(req,res)
})

module.exports = router