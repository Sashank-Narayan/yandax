const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin : "https://localhost:8081"
};

const db = require("./app/models");
db.sequelize.sync({force : true}).then(() => {
    console.log("Drop and re-sync databases");
});

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.get("/",(req,res) => {
    res.json({message : "Welcome to the application"});
});

require("./app/routes/yandax.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
});

