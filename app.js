const 
   express = require("express"),
   app     = express(), 
   PORT = process.env.PORT || 1607,
   router = require("./router/router")

//Middlewares
app.set("view engine", "pug")
app.use(express.static("public"))
app.use(router)

app.listen(PORT, ()=> console.log(`App listening in the port ${PORT}`))