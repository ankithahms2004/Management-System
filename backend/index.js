const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();

app.use(cors(
    {
        origin:["https://management-system-frontend-ten.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
))

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect('mongodb+srv://ankithankith022:ankithahms2004@cluster0.brlmd.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);
app.get('/',(req,res)=>{
    res.json("Hello");
})

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
