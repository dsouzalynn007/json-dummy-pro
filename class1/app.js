console.log(document.links);
let links=document.links
console.log(typeof links);
console.log(Array.isArray(links));

//! adding class name individually
links[0].className ='link-1'
links[1].className ='link-2'
links[2].className ='link-3'
links[3].className ='link-4'
links[4].className ='link-5'
links[5].className ='link-6'
links[6].className ='link-7'
links[7].className ='link-8'
links[8].className ='link-9'
links[9].className ='link-10'
//! adding class name randomly
for(let mylink of links){
    // console.log(links);
    mylink.className = 'link-'+Math.round(Math.random()*10)
}
//! D O M DIRECT ACCESS
// document.scripts
// document.styleSheets
// document.title
// document.doctype
// document.contentType
// document.links
// document.forms
// document.images
// document.baseURI
// document.URL
// document.location

//! DOCUMENT.IMAGES
let images = document.images;
[...images].forEach(ele=>(ele.className='forRound'));
console.log(images);
//! DOCUMENT.FORMS
let forms = document.forms;
[...forms].forEach(ele=>ele.className='formData');
console.log(forms);
let postForms = document.forms;
[...postForms].map(ele=>ele.method==='post');
console.log(postForms);

//! DOCUMENT.URL
if(document.URL==='file:///C:/Users/lynnd/OneDrive/Desktop/TestYantra/basic/jspractice/DOM/index.html'){
    console.log('this is local server');
}
else{
    console.log('cloud server');
}
//! Document.CONTENTTYPE
if(document.contentType==='text/html'){
    console.log('content type os text/html');
}
else{
    console.log('other format');
}

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