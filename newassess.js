let select=document.querySelector('select')
let section=document.querySelector('section')
select.addEventListener('change',e=>{
    section.style.background=`url(${e.target.value}.jpg)`
    section.style.backgroundRepeat='no-repeat'
    section.style.backgroundSize='contain'
    section.style.height='100vh'
})