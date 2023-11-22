const ApiKey = require("./middleware/apiKeyMiddleware")
const app = require("express")()
const bodyParser = require("body-parser")
const mangaRouter = require("./routes/mangaRouter")
const mangaListRouter = require("./routes/mangaListRouter")

app.use(bodyParser.json())
require('dotenv').config()

app.use(ApiKey)
app.use("/api/manga", mangaRouter)
app.use("/api/mangaList", mangaListRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Server Start On Port ${process.env.PORT} 🎉✨ `)
})