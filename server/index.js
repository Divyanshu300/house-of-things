const express = require("express");
const app = express();

const dotenv = require("dotenv")
dotenv.config()

const port = process.env.PORT || 4000

app.get("/" , () => {
    console.log("App Kaam Krr rhaa hai")
})

app.listen(port, () => {
    console.log(`Server is is Running at ${port}`)
})

