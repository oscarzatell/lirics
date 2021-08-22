const axios = require("axios").default
const cutlyrics = require("../functions/cutlyrics")
let fetchTrue = true

module.exports = async (req, res, next)=> {

   let 
      i = 0,
      lyrics = ''

   const fetching = ()=> {

      const url = req.query.uri.replace(/[a-zA-Z[0-9].webvtt/, i + '.webvtt')
      axios.get(url)
      .then(res => {
         
         justLyrics = cutlyrics(res)
         lyrics += justLyrics
         fetching()
      })
      .catch( err =>{
         
         
         req.webvtt = lyrics
         fetchTrue = false
         next()
      })

      i++
   }
   fetching()
}