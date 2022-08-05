// console.log(document.links);
// let links=document.links
// console.log(typeof links);
// console.log(Array.isArray(links));

// //! adding class name individually
// links[0].className ='link-1'
// links[1].className ='link-2'
// links[2].className ='link-3'
// links[3].className ='link-4'
// links[4].className ='link-5'
// links[5].className ='link-6'
// links[6].className ='link-7'
// links[7].className ='link-8'
// links[8].className ='link-9'
// links[9].className ='link-10'
// //! adding class name randomly
// for(let mylink of links){
//     // console.log(links);
//     mylink.className = 'link-'+Math.round(Math.random()*10)
// }
// //! D O M DIRECT ACCESS
// // document.scripts
// // document.styleSheets
// // document.title
// // document.doctype
// // document.contentType
// // document.links
// // document.forms
// // document.images
// // document.baseURI
// // document.URL
// // document.location

// //! DOCUMENT.IMAGES
// let images = document.images;
// [...images].forEach(ele=>(ele.className='forRound'));
// console.log(images);
// //! DOCUMENT.FORMS
// let forms = document.forms;
// [...forms].forEach(ele=>ele.className='formData');
// console.log(forms);
// let postForms = document.forms;
// [...postForms].map(ele=>ele.method==='post');
// console.log(postForms);

// //! DOCUMENT.URL
// if(document.URL==='file:///C:/Users/lynnd/OneDrive/Desktop/TestYantra/basic/jspractice/DOM/index.html'){
//     console.log('this is local server');
// }
// else{
//     console.log('cloud server');
// }
// //! Document.CONTENTTYPE
// if(document.contentType==='text/html'){
//     console.log('content type os text/html');
// }
// else{
//     console.log('other format');
// }

// //! D O M INDIRECT ACCESS
// // document.querySelector
// // document.querySelectorAll
// // document.getElementById
// // document.getElementsByClassName
// // document.getElementsByTagName
// // document.getElementsByName

// let select = document.getElementById('demo');
// console.log(select);
// let select2 = document.querySelector('#demo p');
// console.log(select2);

// //! DOM STAGE 1
// let section=document.getElementsByTagName('section');
// console.log(section[0]);
// let article=document.getElementsByTagName('article');
// console.log(article[0]);
// let div=document.getElementsByTagName('div');
// console.log(div[0]);
// let h1=document.getElementsByTagName('h1');
// console.log(h1[0]);

// //! DOM STAGE 2
// let mainSec=document.querySelectorAll('#mainSec')
// console.log(mainSec);

// //! DOM STAGE 3
// let mainSec=document.querySelector('#mainSec');
// let article=document.querySelector('#mainSec article');
// let div=document.querySelector('#mainSec article div');
// let h1=document.querySelector('#mainSec article div h1');
// let p=document.querySelector('#mainSec article div p');
// console.log(mainSec);
// console.log(article);
// console.log(div);
// console.log(h1);
// console.log(p);

//!---------------------------------------------

// let h1=document.getElementById('h1')
// let div=document.getElementById('div')
// let para=document.getElementById('para')
// let btn=document.getElementById('btn')
// let form=document.getElementById('form')
// let sec=document.getElementById('sec')
// console.dir(h1)
// console.log(h1)
// document.writeln(h1)
// document.writeln(div)
// document.writeln(para)
// document.writeln(btn)
// document.writeln(form)
// document.writeln(sec) /* semantic tag */

// let divs=document.getElementsByTagName('div');
// [...divs].forEach(ele=>(ele.style.color='red'));

// let divsbyTagName=document.getElementsByTagName('div');
// console.log(divsbyTagName);
// console.log(typeof divsbyTagName);
// console.log(Array.isArray(divsbyTagName));
//!
// let divsbyQueryAll=document.querySelectorAll('div');
// console.log(divsbyQueryAll);
// console.log(typeof divsbyQueryAll);
// console.log(Array.isArray(divsbyQueryAll));
// divsbyQueryAll.forEach(ele=>{
//     ele.style.color='green'
//     ele.style.background='#eee'
//     ele.style.padding='10px'
//     ele.style.margin='10px'
//     ele.style.textAlign='center'
// })

// let divsbyClassName=document.getElementsByClassName('divsbyClassName');
// console.log(divsbyClassName);
// console.log(typeof divsbyClassName);
// console.log(Array.isArray(divsbyClassName));
// [...divsbyClassName].forEach(ele=>{
//     ele.style.color='blue'
//     ele.style.background='#9999'
//     ele.style.padding='10px'
//     ele.style.margin='10px'
//     ele.style.textAlign='center'
// })

// //! ADDING MULTIPLE CLASSES BY D.O.M

// let addclassbutton = document.getElementsByTagName('button').item(0)
// let removeclassbutton = document.getElementsByTagName('button').item(1)
// let divtag = document.getElementsByTagName('div').item(0)
// //! PROPERTY WAY
// addclassbutton.onclick = function(){
//     console.log('adding working');
//     divtag.setAttribute('class','active')
// }
// removeclassbutton.onclick = function(){
//     console.log('removing working');
//     divtag.removeAttribute('class','active')
// }
// //! TOKEN LIST WAY
// addclassbutton.onclick = function(){
//     console.log('adding working');
//     divtag.classList.add('class','active')
// }
// removeclassbutton.onclick = function(){
//     console.log('removing working');
//     divtag.classList.remove('class','active')
// }
// //! METHOD WAY
// addclassbutton.onclick = function(){
//     console.log('adding working');
//     divtag.className = 'active'
// }
// removeclassbutton.onclick = function(){
//     console.log('removing working');
//     divtag.className = 'null'
// }

// let button = document.getElementsByTagName('button').item(0)
// let div = document.getElementsByTagName('div').item(0)
// button.onclick = function(){
//     div.classList.toggle('active')
//     if(div.classList.contains('active')){
//         button.textContent='HIDE'
//         button.style.background='aquamarine'
//         button.style.color='green'
//         button.style.borderRadius='10px'
//         button.style.padding='10px'
//     }
//     else{
//         button.textContent='SHOW'
//         button.style.background='bisque'
//         button.style.color='chocolate'
//         button.style.borderRadius='10px'
//         button.style.padding='10px'
//     }
// }

// let li=document.querySelectorAll('li')
// console.log(li);
// let title= (li[0].attributes[0].value='i have changed by property way')
// console.log(title);
// or
// li.item(0).setAttribute('title','i have changed by method way')

// let div=document.createElement('div')
// let section=document.createTextNode('section')
// let comment=document.createComment('this is a html comment')
// console.log(div);
// console.log(section);
// console.log(comment);

//!transverse
// let transverse=document.getElementById('transverse')

// console.log(transverse.firstChild);
// console.log(transverse.firstElementChild);
// console.log(transverse.lastChild);
// console.log(transverse.lastElementChild);
// console.log(transverse.childNodes);
// console.log(transverse.children);
// console.log(transverse.parentNode);
// console.log(transverse.parentNode.parentNode);
// console.log(transverse.parentElement);
// console.log(transverse.nextSibling);
// console.log(transverse.nextElementSibling);

// console.log(transverse.parentNode);
// console.log(transverse.parentNode.parentNode);
// console.log(transverse.parentNode.parentNode.parentNode);
// console.log(transverse.parentNode.parentNode.parentNode.parentNode);
// console.log(transverse.parentNode.parentNode.parentNode.parentNode.parentNode);

// console.log(transverse.parentElement);
// console.log(transverse.parentElement.parentElement);
// console.log(transverse.parentElement.parentElement.parentElement);
// console.log(transverse.parentElement.parentElement.parentElement.parentElement);

// let mylists=document.querySelectorAll('li')
// console.log(mylists);
// mylists.forEach(elements=>{
//     let button=document.createElement('button')
//     button.className='mybutton'
//     button.textContent='Delete'
//     console.log(button);
//     elements.appendChild(button)
//     button.onclick=function(){
//         button.parentElement.remove()
//     }
// })

// let lists=document.querySelectorAll('li')
// console.log(lists[0].nextElementSibling);
// lists[0].nextElementSibling.style.background='white'
// lists[9].previousElementSibling.style.background='white'

// let ul=document.querySelector('ul')

// ul.insertAdjacentText('beforeend','new text')
// ul.insertAdjacentText('beforebegin','new text')
// ul.insertAdjacentText('afterend','new text')
// ul.insertAdjacentText('afterbegin','new text')
// ul.insertAdjacentHTML('beforeend','<h1>head tag</h1>')
// ul.insertAdjacentHTML('beforebegin','<h1>head tag</h1>')
// ul.insertAdjacentHTML('afterend','<h1>head tag</h1>')
// ul.insertAdjacentHTML('afterbegin','<h1>head tag</h1>')

// let button=document.querySelector('button')
// let customEvent=new Event('myEvent')
// button.addEventListener('myEvent',e=>{
//     console.log(e);
// })
// button.dispatchEvent(customEvent)
// button.addEventListener('click',e=>{
//     console.log(e);
// })

// let button=document.querySelector('button')
// console.log(button);
// function randomNumber(num){
//     return Math.round(Math.random()*num+1)
// }
// button.addEventListener('click',e=>{
//     let rgbValue =`rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
//     console.log(rgbValue);
//     document.body.style.background=rgbValue
// })

