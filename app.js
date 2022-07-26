// console.log('helloo');
// document.write('hello')
// document.writeln('hellllooo')
// document.writeln('hiii')
// alert('only for 18+')
// prompt('enter your age')
// confirm('confirm your age')

// const a

// let a=20
// let a=30
// let a
// console.log(a);
// priniting possibilities
// // 1
// console.log('I am Lynn, trainee in TYSS');
// // 2
// var a='I am Lynn, trainee in TYSS'
// console.log(a);
// // 3
// var b='I am Lynn,'
// var c='trainee in TYSS'
// console.log(b+' '+c);
// // 4
// console.log(`${b} ${c}`);
// // 5
// var d='Lynn'
// var e='trainee'
// var f='TYSS'
// console.log(`I am ${d}, ${e} in ${f}`);
// let rep1='hello'
// let rep2='hi'
// console.log(rep1.replace('h',''));
// console.log(rep1);
// let a='i am lynn'
// console.log(a.split(''));
// console.log(a.split(' '));
// console.log(a.split('  '));
// let b='I am a developer'
// console.log(b);
// console.log(b.split('').reverse().join(''));

// let input1=Number(prompt('enter 1st number'));
// let input2=Number(prompt('enter 2nd number'));
// let input3=Number(prompt('enter 2nd number'));
// let calc1=input1+input2+input3
// let calc2=input1-input2-input3
// let calc3=input1*input2*input3

// alert(`
// sum of ${input1}, ${input2} and ${input3} is "${calc1}"
// difference of ${input1}, ${input2} and ${input3} is "${calc2}"
// product of ${input1}, ${input2} and ${input3} is "${calc3}"
// `)

// console.log(`sum of ${input1}, ${input2} and ${input3} is ${calc1}`);
// console.log(`difference of ${input1}, ${input2} and ${input3} is ${calc2}`);
// console.log(`product of ${input1}, ${input2} and ${input3} is ${calc3}`);


// let inputA=prompt('enter 1st word')
// let inputB=prompt('enter 2nd word')

// // adding using concat
// let op1=inputA+' '+inputB
// alert(`entered sentence is ${op1}`)
// console.log(`entered sentence is ${op1}`);

// // converting to uppercase
// let op2=inputA.toUpperCase()+' '+inputB.toUpperCase()
// alert(`entered sentence in uppercase is ${op2}`)
// console.log(`entered sentence in uppercase is ${op2}`);

// // reversing enetred words
// let op1=inputA+' '+inputB
// let op3=op1.split('').reverse().join('')
// alert(`entered sentence is ${op1}`)
// alert(`entered sentence in reversed order is ${op3}`)
// console.log(`entered sentence in reversed order is ${op3}`);

// // adding new word using concat
// let op1=inputA+' '+inputB
// let op4=prompt('enter new word')+' '+op1
// alert(`entered sentence is ${op1}`)
// alert(`new sentence after adding a word is ${op4}`)
// console.log(`new sentence after adding a word is ${op4}`);

// // adding new word using method
// let op5=prompt('enter new word')
// let op1=inputA+' '+inputB
// let op6=op1.split(' ')
// let op7=op6.unshift(op5)
// let op8=op6.join(' ')
// alert(`entered sentence is ${op1}`)
// alert(`new sentense after adding a word is ${op8}`)
// console.log(op8);

// console.log('start');
// var a=10
// console.log(a);
// var b=20
// console.log(b);
// function x(){
//     let b=100
//     console.log(b);
//     var a=555
//     console.log(a);
// }
// x()
// function y(){
//     let c=30
//     console.log(c)
//     var a=666
//     console.log(a);
//     console.log(this.a) 
// }
// y()
// console.log('end');

// console.log('start');
// var a=99
// console.log(a);
// function x(){
//     let b
//     console.log(b);
//     console.log(this.a);
// }
// x()
// function y(){
//     var c=55
//     console.log(c)
// }
// y()
// var b
// console.log(b);
// console.log('end');

// // scope of var
// // global
// var a=10
// console.log(a);
// console.log(this.a);
// console.log(window.a);
// // block
// {
//     var a=20
//     console.log(a);
// }
// console.log(a);
// console.log(this.a);
// console.log(window.a);
// // local
// function abc()
// {
//     var a=30
//     console.log(a);
//     console.log(this.a);
//     console.log(window.a);
// }
// abc()

// // scope of let/const
// // global
// let a=10
// console.log(a);
// console.log(this.a);
// console.log(window.a);
// // block
// {
//     const a=20
//     console.log(a);
// }
// console.log(a);
// console.log(this.a);
// console.log(window.a);
// // local
// function abc()
// {
//     let a=30
//     console.log(a);
//     console.log(this.a);
//     console.log(window.a);
// }
// abc()

// let a=10
// console.log(a);
// function c(){
//     let c=30
//     console.log(c);
// }
// c()
// {
//     let b = 20
//     console.log(b);
// }

// // assessment check
// console.log(typeof Array);
// a = (()=>console.log("IIFE"))();console.log(a);
// var a = function abc(){ console.log('hi');} a();
// let a =eval("10+5*5");console.log(a);console.log(typeof a);
// var x=(function(x){return x*x}(10));
// let[...a,b,c]=[1,2,3,4,5,6];console.log(a);


// // closure
// console.log('start');
// function x(){
//     var a=10
//     var b=20
//     function y(){
//         console.log(a);
//         console.log(b);
//     }
// return y
// }
// x()()
// console.log('end');

// console.log(this.a);

// var a=10
// {
//     var a=20
//     console.log(a);
// }
// console.log(a);
// console.log(this.a);

// let a=10
// {
//     var a=20
//     console.log(a);
// }
// console.log(a);
// console.log(this.a);

// var a=10
// {
//     let a=20
//     console.log(a);
// }
// console.log(a);
// console.log(this.a);

// let a=10
// {
//     let a=20
//     console.log(a);
// }
// console.log(a);
// console.log(this.a);

// var a=10
// function x(){
//     var a=20
//     console.log(a);
// }
// x()
// console.log(a);
// console.log(this.a);

// let a=10
// function x(){
//     var a=20
//     console.log(a);
// }
// x()
// console.log(a);
// console.log(this.a);

// var a=10
// function x(){
//     let a=20
//     console.log(a);
// }
// x()
// console.log(a);
// console.log(this.a);

// let a=10
// function x(){
//     let a=20
//     console.log(a);
// }
// x()
// console.log(a);
// console.log(this.a);

// var a=10
// {
//     var a=20
//     console.log(a);
// }
// console.log(a);
// console.log(this.a);
// var a=10
// function x(){
//     var a=20
//     console.log(a);
// }
// x()
// console.log(a);
// console.log(this.a);

// // OBJECT
// let example = 
// {
//     myname:'lynn',
//     id:007,
//     normFunEx: function abc ()
//     {
//         console.log('i am a normal function');
//         console.log(this);
//     },
//     arroFunEx: ()=>
//     {
//         console.log('i am an arrow function');
//         console.log(this);
//     }
// }
// console.log(example);
// example.normFunEx()
// // console.log(example.normFunEx);
// // console.log(example.normFunEx());
// example.arroFunEx()
// // console.log(example.arroFunEx);
// // console.log(example.arroFunEx());

// example.newpair='something'
// console.log(example);

// console.log(Object.keys(example));
// console.log(Object.values(example));
// console.log(Object.entries(example));
// console.log(Object.assign(example));
// console.log(example);
// console.log(Object.create(example));
// console.log(Object.create(example.__proto__));
  

// console.log(typeof Window);          //
// console.log(typeof window);          //
// console.log(typeof This);            //
// console.log(typeof this);            //
// console.log(typeof Undefined);       //
// console.log(typeof undefined);       //
// console.log(typeof Null);            //
// console.log(typeof null);            //
// console.log(typeof Prototype);       //
// console.log(typeof prototype);       //
// console.log(typeof __proto__);       //
// console.log(typeof Number);          //
// console.log(typeof console);         //
// console.log(typeof console.log);     //
// console.log(typeof True);            //
// console.log(typeof true);            //
// console.log(typeof false);           //
// console.log(typeof 1);               //
// console.log(typeof number);          //
// console.log(typeof String);          //
// console.log(typeof '');              //
// console.log(typeof string);          //
// console.log(typeof Array);           //
// console.log(typeof []);              //
// console.log(typeof array);           //
// console.log(typeof Object);          //
// console.log(typeof {});              //
// console.log(typeof object);          //
// console.log(typeof Function);        //
// console.log(typeof function(){});    //
// console.log(typeof Date);            //
// console.log(typeof NaN);             //
// console.log(typeof Math);            //

//? // array to object
// let data=['sname','age','id','marks']
// let [...a]=data
// console.log(a);
// let {...b}=data
// console.log(b);

//? // joining 2 objects
// let obj1={fname:'lynn',lname:'soz'}
// let obj2={age:26,company:'TYSS',lname:'dsouza'}
// let obj3={...obj1 , ...obj2}
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// // PROTPTYPAL INHERITANCE IN JAVASCRIPT
// //! creating object in normal way
// let example1 = { abc:1, def:2, ghi:3}
// //! check prototype in console
// console.log(example1);
// //! newEntry is undefined since it cannot be accessed before intilizing
// console.log(example1.newEntry);
// let example2 = { ghi:4, jkl:5, mno:6}
// console.log(example2);
// //! common for all objects i.e example1,example2,Student1,StudentX 
// //! after creating an object to add properties to prototype
// example1.__proto__.newEntry='something'
// //! check prototype in console
// console.log(example1);
// console.log(example2);
// //! newEntry is 'something' since to cannot be accessed before intilizing
// console.log(example1.newEntry);
// //! creating object using function and new keyword
// function StudentData(sname,sage,sgender){
//     this.sname=sname
//     this.sage=sage
//     this.sgender=sgender }
// //! before creating an object to add properties to prototype
// StudentData.prototype.sschoolname='GHPS'
// //! creating an object using new keyword
// let Student1=new StudentData('lynn',23,'male')
// //! after creating an object to add properties to prototype
// //! common to objects created by this function
// Student1.__proto__.smarks=500 
// console.log(Student1);
// //! creating an another object using new keyword
// let StudentX=new StudentData('XYZ',999,'XYZ')
// console.log(StudentX);
// //! accessing prototype 
// console.log(Student1.__proto__.smarks);
// //! all 3 below statements are same because child has inherited from all parents
// console.log(Student1.__proto__.__proto__.newEntry);
// console.log(Student1.__proto__.newEntry);
// console.log(Student1.newEntry);

//! OBJECT METHODS
// let example={sname:'lynn',sage:26,sgender:'male'}
// console.log(Object.keys(example));
// console.log(Object.values(example));
// console.log(Object.entries(example));
// let exampleX={xname:'xxx',xage:999,xgender:'xxx'}
// console.log(Object.assign(example,exampleX));
// console.log(Object.create(example));
// console.log(Object.getPrototypeOf(example));3

// let updateexample1=Object.freeze(example)
// updateexample1.sname='soz'
// updateexample1.newelement='something'
// console.log(example);
// console.log(Object.isFrozen(example));

// example.sname='soz'
// example.newelement='something'
// console.log(example);
// console.log(Object.isFrozen(example));

// let updateexample2=Object.seal(example)
// updateexample2.sname='soz'
// updateexample2.newelement='something'
// console.log(example);
// console.log(Object.isFrozen(example));


// let price=[100,200,300,400,500]
// console.log(price);
// //! filter method (builtin array method)
// let filteredItems = price.filter(ele=>{
//     return ele>250
// })
// console.log(filteredItems);
// //! filter using function
// let usingFunction = price.filter(ele=>{
//     if(ele>250){
//         return ele
//     }
// })
// console.log(usingFunction);
// //! filter using function
// let usingForloop = function (){
//     for(let ele of price)
//     if(ele>250){
//         console.log(ele);
//     }
// }
// usingForloop()
// //! filter using rest parameter
// let z= function(...price){
//     console.log(price);
//     for(let ele of price)
//     if(ele>250){
//         console.log(ele);
//     }
// }
// z(50,600,700,100)

// //! iterating array elements using for of loop
// let iterateArrayElements=['lynn',23,'male']
// for(let iterateElements of iterateArrayElements){
//     console.log(iterateElements);
// }
// //! iterating array index value using for in loop
// let iterateArrayIndex=['lynn',23,'male']
// for(let iterateIndex in iterateArrayIndex){
//     console.log(iterateIndex);
// }
// //! iterating object propeties using for in loop
// let iterateObject={sname:'lynn',sage:26,sgender:'male'}
// for(let iterateKeys in iterateObject){
//     console.log(iterateKeys);
// }
// for(let iterateValues in iterateObject){
//     console.log(iterateObject[iterateValues]);
// }

// let price=[100,200,300,400,500]
// console.log(price);
// let filteredPrice=price.filter(ele=>{
//     console.log(ele);
// })
// console.log(filterdPrice);

// let N=[2,3,4,5,6]
// let R=N.reduce((a,b,c,d)=>{
//     // console.log(a);
//     // console.log(b);
//     console.log(c);
//     // console.log(d);
//     return a+b
// })
// console.log(R);

//? // mapExample
// let arr=[1,22,333,4444,55555]
// let mapExample=arr.map(ele=>{
//     return ele
// })
// console.log(mapExample);

//? // foreachExample
// let foreachExample=arr.forEach(ele=>{
//     return ele
// })
// console.log(foreachExample);

//! DATE OBJECTS METHOD
// let myDate = new Date()
// console.log(myDate);

// let DAYS=['SUN','MON','TUE','WED','THU','FRI','SAT']
// let MONTHS=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

// console.log(`Date : ${myDate.getDate()}`);
// console.log(`Day : ${myDate.getDay()+1} th day of week`);
// console.log(`Day : ${DAYS[myDate.getDay()]}`);
// console.log(`Month : ${myDate.getMonth()+1} th day of year`);
// console.log(`Month : ${MONTHS[myDate.getMonth()]}`);
// console.log(`Time : ${myDate.getTime()}`);
// console.log(`Hours : ${myDate.getHours()}`);
// console.log(`Minutes : ${myDate.getMinutes()} min`);
// console.log(`Seconds : ${myDate.getSeconds()} sec`);
// console.log(`Milliseconds : ${myDate.getMilliseconds()} milsec`);

// //! MATH OBJECTS METHOD
// console.log(Math.pow(2,4));
// console.log(Math.sqrt(4));
// console.log(Math.cbrt(27));
// console.log(Math.floor(8.8));
// console.log(Math.ceil(8.2));
// console.log(Math.round(8.4));
// console.log(Math.round(8.5));
// //! DIGITAL CLOCK
// function clockprogram()
// {
// let mydate = new Date()
// let hours= mydate.getHours()
// let minutes = mydate.getMinutes()
// let seconds = mydate.getSeconds()
// let display=`${hours} : ${minutes} : ${seconds}`
// let myclock = document.getElementById('myclock')
// myclock.innerHTML=display
// }
// setInterval(clockprogram,1000)
// //! or (directly)
// function clockprogram()
// {
// let mydate = new Date().toLocaleTimeString()

// let myclock = document.getElementById('myclock')
// myclock.innerHTML=mydate
// }
// setInterval(clockprogram,1000)
// //! or (directly) in one line !!!
// setInterval(()=>document.getElementById('myclock').innerText=new Date().toLocaleTimeString())

// function user(){
//     console.log(this);
// }
// user()

// function user(){
//     console.log(this);
// }
// new user()

// let myuser=()=>{
//     console.log(myuser);
// }
// new myuser() //!error//

// function normaluser(){
//     return {one:1, two:2}
// }
// console.log(normaluser());

// let arrowuser=()=>({one:1, two:2})
// console.log(arrowuser());

