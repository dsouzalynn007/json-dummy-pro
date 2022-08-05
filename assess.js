let form=document.createElement('form')
form.method= 'post'
form.action= '#'

let labelname=document.createElement('label')
labelname.htmlFor = 'username'
labelname.textContent = 'username'

let labelpass=document.createElement('label')
labelpass.htmlFor = 'password'
labelpass.textContent = 'password'

let labelemail=document.createElement('label')
labelemail.htmlFor = 'email'
labelemail.textContent = 'email'

let labelmob=document.createElement('label')
labelmob.htmlFor = 'mobnumber'
labelmob.textContent = 'mobnumber'

let inputname=document.createElement('input')
inputname.type = 'text'
inputname.value = ''
inputname.name = 'username'
inputname.id = 'username'

let inputpass=document.createElement('input')
inputpass.type = 'password'
inputpass.value = ''
inputpass.name = 'password'
inputpass.id = 'password'

let inputemail=document.createElement('input')
inputemail.type = 'email'
inputemail.value = ''
inputemail.name = 'email'
inputemail.id = 'email'

let inputmob=document.createElement('input')
inputmob.type = 'tele'
inputmob.value = ''
inputmob.name = 'mobnumber'
inputmob.id = 'mobnumber'

let button=document.createElement('button')
button.type = 'submit'
button.textContent='submit'

form.appendChild(labelname)
form.appendChild(inputname)
form.appendChild(labelpass)
form.appendChild(inputpass)
form.appendChild(labelemail)
form.appendChild(inputemail)
form.appendChild(labelmob)
form.appendChild(inputmob)
form.appendChild(button)

let section=document.createElement('section')
section.appendChild(form)
document.body.append(section)

button.onclick = function(e) {
    e.preventDefault()
    let myname=inputname.value
    let mypassword=inputpass.value
    let myemail=inputemail.value
    let mynumber=inputmob.value
    let article=document.createElement('article')
    document.body.append(article)
    section.style.display='none'
    article.innerHTML = `
    <h1>myname: </h1><p>${myname}</p>
    <h1>mypassword: </h1><p>${mypassword}</p>
    <h1>myemail: </h1><p>${myemail}</p>
    <h1>mynumber: </h1><p>${mynumber}</p>
    `
}