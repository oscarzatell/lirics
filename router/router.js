const 
   express = require("express"), 
   router = express.Router(),
   fetch = require("../middlewares/fetch")

router.all("/url", fetch)


router.get("/", (req, res)=> {

   res.render("index")
})


router.get("/url", (req, res)=>{

   res.end(req.webvtt)
})

module.exports = router