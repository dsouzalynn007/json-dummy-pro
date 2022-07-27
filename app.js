function clockprogram()
{
let mydate = new Date()
let hours= mydate.getHours()
let minutes = mydate.getMinutes()
let seconds = mydate.getSeconds()
let display=`${hours} : ${minutes} : ${seconds}`
let myclock = document.getElementById('myclock')
myclock.innerHTML=display
}
setInterval(clockprogram,1000)