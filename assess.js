let form = document.querySelector("form")
let patientName = document.querySelector("#patientName")
let patientdata = document.querySelector("#rightdata")
let testname = document.querySelectorAll(".testName")
let amount = document.querySelectorAll(".amount")
let totalAmount = document.querySelector("#totalvalue")
let i = 1;
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let inputValue = e.target[0].value
    patientName.innerHTML = `Patient Name : ${inputValue}`
    let testValue = e.target[1].value
    testname.forEach((test, index) => {
        if (test.innerHTML === testValue) {
            patientdata.innerHTML += 
            `<tr>
            <td>${i++}</td>
            <td>${test.textContent}</td>
            <td class = 'payable'>${amount[--index].innerHTML}</td>
            </tr>`
        }
    })
})