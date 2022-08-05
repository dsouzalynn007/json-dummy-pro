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
    let count=localStorage.length
    let toLocal = { name:inputname.value, password:inputpass.value, email:inputemail.value, number:inputmob.value }
    window.localStorage.setItem(`Data${count}`,JSON.stringify(toLocal))
}