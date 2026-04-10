const express = require('express')

const app = express();

app.use(express.static("../public"))
app.set('view engine', 'ejs')






const urouter = require("../routes/user")


app.use("/users", urouter)




app.listen(3000);



