"use strict";

import express from "express"

const PORT = 4000
const app = express()

const handleHome = (req, res) => {
    console.log("Welcom my home.")
    return res.send("Welcome!")
}

app.get("/", handleHome)

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} 🚀`)
app.listen(PORT, handleListening)