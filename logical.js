//! LOGIAL CLASS START

// console.log('20'+20-'20'-20);
// console.log('string'-10);
// console.log(10-'string');
// console.log('string'-'string');
// console.log('20'-'10');
// console.log('string'-'10');
// console.log('10'-'string');
// console.log(null+null);
// console.log(null+undefined);
// console.log(undefined+null);
// console.log(undefined+undefined);
// console.log(null-null);
// console.log(null-undefined);
// console.log(undefined-null);
// console.log(undefined-undefined);

// console.log(NaN+NaN);
// console.log(NaN-NaN);
// console.log(NaN+null);
// console.log(NaN-null);
// console.log(null+NaN);
// console.log(null-NaN);
// console.log(NaN+undefined);
// console.log(NaN-undefined);
// console.log(undefined+NaN);
// console.log(undefined-NaN);
// console.log(NaN+true);
// console.log(NaN+false);
// console.log(NaN-true);
// console.log(NaN-false);

// console.log(10===9);
// console.log(10===10);
// console.log('10'===9);
// console.log('10'===10);
// console.log('10'==='9');
// console.log('10'==='10');
// console.log(10!==9);
// console.log(10!==10);
// console.log('10'!==9);
// console.log('10'!==10);
// console.log('10'!=='9');
// console.log('10'!=='10');
// console.log('10'===10!=='10'===10!=='10');
// console.log(true==1);
// console.log(true<0);
// console.log(false==0);
// console.log(false<-1);
// console.log(false<0);
// console.log(null==false);
// console.log(0==false);
// console.log(0==null);
// // console.log(typeof NaN === typeof (null+false));

// let a=5
// let b=3
// let c=10
// a = ++b + c++ - --c + b++ + a++
// b = a-- + c++ + ++a
// c = b++ - --c + ++a + b++
// console.log(a,b,c);

// let a1=10
// let a2=20
// let res1=(a1++>11 && (a2++ + a1++)>11)?a1:a2
// console.log(res1);

// let b1=10
// let b2=20
// let res2=(b2++>20 || (++b1 + b2++)>11)?b1:b2
// console.log(res2);

// let menu = prompt('enter deatils in lowercase')
// switch (menu) {
//     case 'dosa': 
//     document.write('Dosa 60Rs');
//         break;
//     case 'idli':
//     document.write('Idli 50Rs');
//         break;
//     case 'vada':
//     document.write('Vada 25Rs');    
//         break;
//     case 'ricebath':
//     document.write('Ricebath 45Rs');
//         break;
//     case 'tea':
//     console.log('Tea 10Rs');
//         break;
//     case 'coffee':
//     console.log('Coffee 20Rs');
//         break;                          
//     default:
//     console.log('not available');
//         break;
// }


// let button=document.querySelector('button')
// button.addEventListener('click',e=>{
//     let input=document.querySelector('input')
//     // console.log(typeof input.value);
//     if(typeof input.value==typeof ''){
//         console.log('Alpha');
//         }
//         else{
//             if(typeof Number(input.value)==typeof 0){
//                 console.log('Numeric')
//             }
//             else{
//                 console.log('Alpha Numeric');
//             }
//         }
// })

// let num=123456
// while(num>0){
//     let digit=num%10
//     num=Math.trunc(num/10)
//     console.log(digit);
// }

// let num2=345678
// do{
//     let digit=num2%10
//     num2=Math.trunc(num2/10)
//     console.log(digit);
// }
// while(num2>0)

// for(let num=1234; num>0; num=Math.trunc(num/10) ){
// let digit=num%10
// console.log(digit);
// }

// let num=1573
// let temp=num
// function dig(num){
//     let sum=0
//     while(num>0){
//         let rem=num%10
//         sum+=rem
//         num=Math.trunc(num/10)
//     }
//     return sum
// }
// let digsum=num
// while (digsum>=10){
//     digsum=dig(num)
//     num=digsum
// }
// if(digsum==1||digsum==7){
//     console.log(`${temp} is happy number`);
// }
// else{
//     console.log(`${temp} is not happy number`);
// }
// for(let num=1; num<=1000; num++){
// let sum=0
// for(let i=1;i<num;i++){
//     if(num%i==0){
//         sum+=i
//     }
// }
// if(num==sum){
//     console.log(num);
// }
// }

// //! simple iterate number
// let num=12321
// while(num>0){
//     let digits=num%10
//     num=Math.trunc(num/10)
//     console.log(digits);
// }
//! simple iterate string
// let str='this is string'
// for(let i=0; i<str.length; i++){
//     console.log(str.charAt(i));
// }

//! palindrome
// let num=12321
// let orgNum=num
// let reverse=''
// while(num>0){
//     let digits=num%10
//     num=Math.trunc(num/10)
//     reverse+=digits
// }
// if(orgNum===Number(reverse)){
//     console.log('palindrome');
// }
// else{
//     console.log('not palindrome');
// }

// //! INTERVIEW QUESTIONS (BACK-END)
// //! Reverse individual word in sentense along with spaces
// let sentense='Yes sir   Yes maam'
// let revSentense=''

// for(let i=0; i<sentense.length; i++){
//     let start=i
//     while(i<sentense.length && sentense[i]!=' '){
//         i++
//     }
//     let end=i-1
//     while(end>=start){
//         if(end==i-1){
//             revSentense+=sentense[end--].toUpperCase()
//         }
//         else{
//             revSentense+=sentense[end--].toLowerCase()
//         }
//     }
//     if(sentense[i]==' '){
//         revSentense+=sentense[i]
//     }
// }
// console.log(revSentense);

// //! INTERVIEW QUESTIONS (BACK-END)
// //! Display only alpha & Alphanumeric (remove numeric from array)
// let myArray=['9999','abc123','abc','AbZ19','32acba','xyz','4321']
// let newArray=[]

// for(let ele of myArray){
//     console.log(ele);
//     let alpha=0
//     let digit=0
//     for(let char of ele){
//         console.log(char);
//         if((char>='a'&&char<='z')||(char>='A'&&char<='Z')){
//             alpha++
//         }
//         else{
//             digit++
//         }
//     }
//     if((alpha!=0&&digit==0)||(alpha!=0&&digit!=0)){
//         newArray.push(ele)
//     }
// }
// console.log(newArray);

//! number of elements repeated in object
// let empData=[
//     {location:'Bangalore'},
//     {location:'Pune'},
//     {location:'Chennai'},
//     {location:'Hyderabad'},
//     {location:'Bangalore'},
//     {location:'Pune'},
//     {location:'Chennai'},
//     {location:'Hyderabad'},
//     {location:'Bangalore'},
//     {location:'Pune'},
//     {location:'Chennai'},
//     {location:'Hyderabad'}
//     ]
// let result=[]
// for(let eleData of empData){
//     // console.log(eleData);
//     result.push(eleData.location)
// }
// result=new Set(result)
// for(let eleRes of result){
//     // console.log(eleRes);
//     let count=0
//     for(let eleData of empData){
//         if(eleRes==eleData.location){
//             count++
//         }
//     }
//     console.log(`${eleRes} : ${count} employees`);
// }

//! number of characters repeated in a string
// let myString='aabbbdddjdjjdddddklzl'
// let intoArray=myString.split('')
// console.log(intoArray);
// removeDup=new Set(intoArray)
// console.log(removeDup);
// for(let eleDup of removeDup){
//     let count=0
//     for(let eleMain of intoArray){
//     if(eleDup==eleMain){
//         count++
//     }
// }
//     console.log(`${eleDup} letter is repeated ${count} times`);
// }

//! ITERATING ARRAY OF OBJECTS
// let myArray=[{a:'1',b:'2'},{a:'3',b:'4'},{a:'5',b:'6'},{a:'7',b:'8'}]
// for(ele of myArray){
//     console.log(ele);
//     for(keys in ele){
//         console.log(keys);
//     }
// }
// adding new property in array of object
// for(ele of myArray){
//     console.log(ele);
//     ele.loc='BLR'
//     console.log(ele);
// }

//! MAP METHOD
// let arr=[1,2,3,4,5]
// let add2=arr.map(ele=>ele+2)
// console.log(add2);

// //! CUSTOMIZED FOREACH
// let arr=[1,2,3,4,5]
// function itirate(cfun,arr){
//     for(let i=0;i<arr.length;i++){
//         cfun(arr[i])
//     }
// }
// itirate(cfun,arr)
// function cfun(value){
//     console.log(value);
// }

// //! CUSTOMIZED MAP
// let arr=[1,2,3,4,5]
// function operate(cfun,arr){
//     let operateArr=[]
//     for(let i=0;i<arr.length;i++){
//         operateArr[i]=cfun(arr[i])
//     }
//     console.log(operateArr);
//     return operateArr
// }
// operate(cfun,arr)
// function cfun(value){
//     return value*5
// }
//! adfingv 2 array evenly
// let arr1=[1,2,3]
// let arr2=[5,6,7,8,9]
// let arr3=[]
// for(let i=0;1<arr1/length||i<arr2.length;i++){
//     if(arr1[i]) arr3.push(arr1[i])
//     if(arr2[i]) arr3.push(arr2[i])
// }
// console.log(arr3);

// //! sort inbuilt method 
// let array=[612,54,234,765,34,543,1234]
// let mySort=array.sort((a,b)=>b-a)
// console.log(mySort);
// //! sort customised method
// let arr=[612,54,234,765,34,543,1234]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             let sorting=arr[i]
//             arr[i]=arr[j]
//             arr[j]=sorting
//         }
//     }
// }
// console.log(arr);
//! sorting nested array
// let nestArr=[[4,2,3,1],[33,44,55,22,55,66,77],[444,111,333],[1111,4444,5555,2222,3333,]]
// for(let index in nestArr){
//     // console.log(index);
//     // console.log(nestArr[index]);
//     console.log(nestArr[index].length);
    
//     if(nestArr%2==0){
//         for(i=0;i<nestArr[index].length;i++){
//             for(let j=i+1;j<nestArr[index].length;j++){
//                 if(nestArr[index][i] > nestArr[index][j]){
//                     let sorting=nestArr[index][i]
//                     nestArr[index][i]=nestArr[index][j]
//                     nestArr[index][j]=sorting
//                 }
//             }
//         }
//     }
//     else{
//         for(i=0;i<nestArr[index].length;i++){
//             for(let j=i+1;j<nestArr[index].length;j++){
//                 if(nestArr[index][i] < nestArr[index][j]){
//                     let sorting=nestArr[index][i]
//                     nestArr[index][i]=nestArr[index][j]
//                     nestArr[index][j]=sorting
//                 }
//             }
//         }
//     }
// }
// console.log(nestArr);

// let size=Number(prompt('enter size of bag'))
// // let n=Number(prompt('enter number of common stones in earth and mars'))
// let weightlist=prompt('enter list of weights seperated by space')

// let totalSize=[]
// for(let i=1;i<=size;i++){
//     totalSize.push(i)
//     console.log(totalSize);
// }
// for(let iterateWeight of weightlist){
//     for(let iterateSize of totalSize){
//         if(iterateWeight==iterateSize){
//             let index=totalSize.indexOf(iterateSize)
//             totalSize.splice(index,1)
//         }
//     }
// }
// let bag=0
// let count=0
// for(let i=0;i<totalSize.length;i++){
//     if(bag<=size){
//         bag+=totalSize[i]
//     }
//     if(bag>size){
//         count=i
//     }
// }
// console.log(count);
//*photo*