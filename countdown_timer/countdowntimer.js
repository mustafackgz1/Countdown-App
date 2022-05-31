const newYears = "03 march 2032"
const dayTime = document.getElementById("days")
const hourTime = document.getElementById("hours")
const minuteTime = document.getElementById("minutes")
const secondTime = document.getElementById("seconds")


function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    let secondTiming = (newYearsDate - currentDate) / 1000
    let days = Math.floor(secondTiming / 3600 / 24 )
    let hours = Math.floor(secondTiming / 3600 % 24)
    let minutes = Math.floor(secondTiming / 60 % 60)
    let seconds = Math.floor(secondTiming % 60)

    //console.log(days, hours , minutes , seconds)

    dayTime.textContent = days
    hourTime.textContent = hours
    minuteTime.textContent = minutes
    secondTime.textContent = seconds

}
countdown()
setInterval(countdown,1000)