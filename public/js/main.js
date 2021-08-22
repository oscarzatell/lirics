const id = Id => document.getElementById(Id)

id("download").onclick = () => {

   const name = prompt("Dale un nombre a tu archivo")
   
   id("adownload").setAttribute("href", `/url/?uri=${id("url").value}`)
   id("adownload").setAttribute("download", name + ".webvtt")
   id("adownload").click()
}