module.exports = (lyrics) => {
   
   lyrics = lyrics.data.split('\n')
   lyrics.length = lyrics.length -3
   let lyricsStr = ''
   lyrics.forEach(text => {
      lyricsStr += text + '\n'
   })
   return lyricsStr
}