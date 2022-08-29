let myAjax= new XMLHttpRequest()

myAjax.open('GET','https://api.github.com/users')

let display=document.querySelector('#display')
myAjax.onload=function(){
    if(myAjax.status>=200 && myAjax.status<300){
        let data=JSON.parse(myAjax.response)
        let myhtml=''
        for(let ele of data){
            let {login,avatar_url,html_url}=ele
            myhtml+=`
            <div>
            <figure>
                <img src="${avatar_url}" alt="${login}" style="height: 100px; width: 100%;">
            </figure>
            <h2>${login}</h2>
            <a href="${html_url}" target="_blank" style="text-decoration: none;">open github account</a>
            </div>`
        }
    display.innerHTML=myhtml
    }
}
myAjax.onerror=function(){
    if(myAjax.status>=400 && myAjax.status<500){
        console.log(JSON.parse(myAjax.response));
    }
}
myAjax.send()