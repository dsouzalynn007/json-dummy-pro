let hourPointer=document.getElementById('hourPointer')
let minPointer=document.getElementById('minPointer')
let secPointer=document.getElementById('secPointer')

let myClock = function(){
    let myDate = new Date()
    let hours=myDate.getHours()
    let minutes=myDate.getMinutes()
    let seconds=myDate.getSeconds()
// console.log(`${hours}:${minutes}:${seconds}`);
    let hourDegrees = hours * 30 + minutes * 0.6
    let minDegrees = minutes * 6 + seconds * 0.1
    let secDegrees = seconds * 6
// console.log(hourDegrees,minDegrees,secDegrees);
    hourPointer.style.transform=`rotateZ(${hourDegrees}deg)`
    minPointer.style.transform=`rotateZ(${minDegrees}deg)`
    secPointer.style.transform=`rotateZ(${secDegrees}deg)`
}
setInterval(myClock,1000)
