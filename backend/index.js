const express = require("express");
const cors = require("cors");
const { connectToDB } = require("./src/config/dbConfig");
const { userRouter } = require("./src/routers/user.router");
const { infoRouter } = require("./src/routers/userInfo.router");


const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());  

app.use("/users", userRouter);
app.use("/user-info", infoRouter);

app.get("/", (req, res)=>{
    res.send(`Server is up!`);
})


app.listen(port, async ()=>{
    try {
        await connectToDB();
        console.log(`Server is running at port ${port}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }  
})