// let button=document.querySelector('button')
// console.log(button);
// button.addEventListener('mouseenter',e=>{
//     console.log('mouse entered');
//     e.target.style.color='white'
//     e.target.style.background='red'
//     e.target.style.width='100%'
// });
// button.addEventListener('mouseenter',e=>{
//     console.log('mouse left');
//     e.target.style.color='white';
//     e.target.style.background='green'
//     e.target.style.width='auto'
// })
// --------------------------------------------------
// let allDivs=document.querySelectorAll('div')
// let article=document.querySelector('article')
// let button=document.querySelector('button')

// button.addEventListener('click',e=>{
//     let newItem=document.createElement('div')
//     newItem.textContent='i am new'
//     article.appendChild(newItem)
// })
// article.addEventListener('click',e=>{
//     if(e.target.nodeName === 'DIV'){
//         e.target.remove()
//     }
// })
// -------------------------------------------------
// let input=document.querySelector('input')
// let p=document.querySelector('p')

// input.addEventListener('keyup',e=>{
//     let inpvalue=e.target.value
//     p.innerHTML=inpvalue
//     console.log(inpvalue);
// })
// -------------------------------------------------
// let text1=document.getElementById('text1')
// let text2=document.getElementById('text2')

// text1.addEventListener('keyup',e=>{
//     text2.innerHTML=e.target.value
// })
// -------------------------------------------------
// let text1=document.getElementById('text1')
// let text2=document.getElementById('text2')

// text1.addEventListener('keypress',e=>{
//     let value=e.target.value
//     if(value.length <3){
//         text2.style.background='red'
//         text2.innerHTML='bad'
//     }
//     else if(value.length >=3 && value.length <=20){
//         text2.style.background='orange'
//         text2.innerHTML='okay'
//     }
//     else if(value.length >20 && value.length <=30){
//         text2.style.background='green'
//         text2.innerHTML='good'
//     }
//     else{
//         text2.style.background='blue'
//         text2.innerHTML='enough'
//     }
// })
// -------------------------------------------------
// let form=document.querySelector('form')
// let userinput=document.querySelector('input[type="text"]')
// let passinput=document.querySelector('input[type="password"]')

// form.addEventListener('submit',e=>{
//     e.preventDefault()
//     let user1=userinput.value
//     let pass1=passinput.value
//     console.log({user1,pass1});
// })
// -------------------------------------------------
// let form=document.querySelector('form')

// form.addEventListener('submit',e=>{
//     e.preventDefault()
//     let user1=e.target[0].name
//     let pass1=e.target[1].value
//     console.log({[user1],pass1});
// })

let form=document.querySelector('form')
let ul=document.querySelector('ul')
form.addEventListener('submit',e=>{
    e.preventDefault()
    let item=e.target[0].value
    let newItem=document.createElement('li')
    newItem.textContent=item
    ul.appendChild(newItem)
    let button=document.createElement('button')
    button.textContent='delete'
    newItem.appendChild(button)
})
ul.addEventListener('click',e=>{
    if(e.target.nodeName==='BUTTON'){
        e.target.parentNode.parentNode.remove()
    }
})
