// window.alert("hi");
// document.write("<h1>play with me asshole</h1>");

// console.log("hello from %cjs","color:red; font-size:40px");

console.log("%cElzero %cweb %cschool","color:red","color:green ;font-weight:bold",
"color:white;background-color:blue")


console.error("error");

console.table(["osama","ali","moustafa"]);

//data types
console.log( typeof{name:"ali" ,age:17 ,country:"egypt"});

/*
declare a variable
-------------------

var name="moustafa";
console.log(name);

*/

/*
Kamal case
-----------

userName
*/



// var name ="ali";
// let name="ali"
// const name="ali";


// console.log(nam);
// var nam="ali";


// console.log(a);
// let a="s";


/*
console.log('name')

console.log("My name \"disha\"");
let a ="we love";
let b="java script";
let c="and programming";

console.log(`${a} "" \\
${b} ${c}`)
*/


//with ES6
// let title="Disha";
// let desc="disha web school";
// let markup = `
//     <div class="card">
//         <div class="child">
//             <h2>${title}</h2>
//             <p>${desc}</p>
//         </div>
//     </div>
// `;

// document.write(markup);

// + Unary plus[return number if it isn't number]
//- Unary Negation[return number if it isn't number and negates it]

console.log(+"100");
console.log(-"100");

// Numbers
// syntactic suger -> "_"
// e6 -> six zeros
// ** -> power

// toString()
// parseInt()
// parseFloat()

// console.log(100..tostring())
// console.log(parseInt("100 string"));
// console.log(100.55.toFixed(1)); ---------->string

// console.log(Number.isInteger("100"))->NaN

console.log(1_000_65);

// Math.floor()-->lowest
// Math.ceil()-->hightest
// Math.round()-->return high if greater than or equal 5 and low if smaller than 5
// Math.max()
// Math.min()
// Math.trunc()-->return integer value




// Numbers lesson 26

// let a=1_00;
// let b=2_00.5;
// let c=1e2;
// let d=2.4;

// console.log(Math.trunc(Math.min(a,b,c,d)));

//console.log(Math.round(d));
//console.log(Math.trunc(d));
//console.log(Math.floor(d));
//console.log(parseInt(d));

// console.log(Math.pow(a,Math.round(d)));

// console.log(Math.round(b)/Math.ceil(d));
// console.log((parseInt(b)/Math.ceil(d)).toFixed(2));

// console.log("100")







// string lesson 27

// let theName=" disha";

// console.log(theName.charAt(2));
// console.log(theName.length);
// console.log(theName.trim());
// console.log(theName.toUpperCase());

// let a="Elzero web school";
// console.log(a.indexOf("web"));
// console.log(a.lastIndexOf('o')); //from end to start

// console.log(a.slice(1,3).toUpperCase()); //the end not included
// console.log(a.slice(-2,-1));

// console.log(a.repeat(2));

// console.log(a.split("",2));






// console.log(a.substring(0,6));
// console.log(a.substring(-10));

// console.log(a.substr(0,3)); //tell him how many chars do you want to append
// console.log(a.substr(-5,2));

// console.log(a.includes("web"));
// console.log(a.includes("web",8)); //char and index

// console.log(a.startsWith("E"));
// console.log(a.startsWith("E",2)); //char and index

// console.log(a.endsWith("o",6)); //char  and   length


// challenge
// let a="Elzero web school";

// console.log(a.charAt(2).toUpperCase()+a.slice(3,6));

// console.log(a.substr(13,1).toUpperCase().repeat(8));

// console.log(a.split(" ",1));

// console.log(`${a.substr(0,6)} ${a.substr(11)}`);

// console.log(a.charAt(0).toLowerCase()+a.substring(1,a.length-1).toUpperCase()+a.substring(a.length-1).toLowerCase());


// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57


// let a ="Elzero web school";
// if(a.slice(a.indexOf("w"),a.indexOf("w")+1)==="w"){
//     console.log("goooooood");
// }



//switch challenge

// let job = "designer";
// let salary = 0;

// switch(job){
//     case "manager":
//         salary=8000;
//         console.log(salary);
//         break;
//     case "it":
//     case "support":
//         salary=6000;
//         console.log(salary);
//         break;
//     case "developer":
//     case "designer":
//         salary=7000;
//         console.log(salary);
//         break;
//     default:
//         salary=4000;
//         console.log(salary);
// }



//array method lesson 42
// unshif()-->add element at the start of array
// push()-->add element at the end of array
// shif()-->remove first element from array and return it if there is a variable
//pop()-->remove last element from array and return it if there is a variable

// let myfriend=["Ahmed","Mohammed","sayed","Alaa"];
// console.log(myfriend);

// myfriend.unshift("disha","ali")
// console.log(myfriend);

// myfriend.push("Yasmin");
// console.log(myfriend);

// let firstName=myfriend.shift();
// console.log(myfriend);
// console.log(firstName);





// array lesson 43
// indexOf("element","from index")
//lastIndexOf("search element","from index")
//include("element","from index")

// let myfriend=["Ahmed","Mohammed","sayed","Alaa"];
// console.log(myfriend.indexOf("Mohammed"));



// sort()-->sort array 1 then 2 then 3   2000 comes first then 9 for example




//lesson 45
//splice (start,number of elements to delete,the elements to insert );




//lesson 46
// let myFriend=["Ahmed","Ali","Sayed","Osama"];
// let myNewFriend=["samer","samara"];
// let schoolFriends=["Haytham","Shady"];

// let newFriend = myFriend.concat(myNewFriend);

// console.log(newFriend);

// console.log(newFriend.join(" |"));




// lesson 47

// let zero=0;
// let counter=3;

// let my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
// let newArray=my.slice(zero,++counter).reverse();


// console.log(my.slice(zero,my.indexOf("Gamal")).reverse()); //["Osama","Elham","Mazero","Ahmed"]
// // console.log(newArray.sort());

// newArray.shift();
// // console.log(newArray);  
// console.log(newArray.slice(zero,--counter)); //["Elhma","Mazero"];


// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(myFriends.indexOf("Ahmed"),num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.pop();
// friends.shift()

// console.log(friends); // ["Eman", "Osama"]

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// console.log(finalArr.concat(arrTwo,arrOne).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]


// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// let ne=allArrs.concat(arr1,arr2).sort();

// // Your Code Here

// console.log(allArrs.concat(arr1,arr2).sort().slice(ne.indexOf("F"),ne.length).join("").toLowerCase()); // fxy
// // console.log(allArrs)





// let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"];
// let myEmployees=["Amgad","Samah","Ameer","Omar","Osman","Amany","Samira","Anwer"];

// let i;
// for(i=1;i<=myAdmins.length;i++){
//     if(myAdmins[i]==="Stop"){
//         break;
//     }
    
// }

// document.write(`we have ${i} Admins`);
// document.write(`<hr>`)
// let j;
// let m;
// let count=0;
//  mainLoop:for( j=0;j<myAdmins.length;j++){
//     if(myAdmins[j]==="Stop"){
//         break;
//     }
//     document.write(`<div>`)
//     document.write(`The Admin for team ${j+1} is ${myAdmins[j]}`);
//     document.write(`<h3>Team Members: </h3>`);
//     innerLoop: for(m=0;m<myEmployees.length;m++){
//     if(myEmployees[m][0]===myAdmins[j][0]){
//         document.write(`<p>-${count+=1} ${myEmployees[m]}</p>`);
//     }
//     else{
//         continue innerLoop;
//     }
// }
//       count=0;
//       document.write(`</div>`)
//       document.write(`<hr>`);

// }


// function showDetails(a , b ,c){
//     typeof a==="string"?
//      console.log(`Hi ${a}`) :
//      typeof b==="string"?
//      console.log(`Hi ${b}`):
//      console.log(`Hi ${c}`);

//      typeof a==="number"?
//      console.log(`Your age is  ${a}`) :
//      typeof b==="number"?
//      console.log(`Your age is  ${b}`):
//      console.log(`Your age is  ${c}`);

//      typeof a==="boolean"?
//      a===true?
//      console.log(`You are avalible for Hiring`):
//      console.log(`You are not avalible for Hiring`):
//      typeof b==="boolean"?
//      b===true?
//      console.log(`You are avalible for Hiring`):
//      console.log(`You are not avalible for Hiring`):
//      c===true?

//      console.log(`you are avalible for Hiring`):
//      console.log(`you are not avalible for Hiring`);


// }


// showDetails(false,"disha",22);




//Arrow function

// let print=()=>{
//     let a =4;
//     return 40;
// }
// console.log(print());

// OR

// let print = _ => 10;
// let print = () => 10;

// console.log(print());



// with parameter



// let print=(num)=>num;  //if you have one parameter you can remove parances
// console.log(print(100));


//challeng Arrow function


// let names=function(...na){
//     return "string ["+na.join("],[")+"] =>Done!";
// }

// console.log(names("osama","disha","ali","mohammed","amr"));


// let names=(...na)=>"string ["+na.join("],[")+"] =>Done!";
// console.log(names("ali","disha","amr"))

// let myNambers=[20, 50, 10, 60];

// let calc=(one,two,...nums)=> one+two+parseInt(nums);
// console.log(calc(10,50,20));


// let calc=function(one,two,...nums){
//     return  one+two+parseInt(nums);
// }
// console.log(calc(10,50,20));

// var element="elzero";
// console.log(element.split("e"));



//Higher order function

// let swappingCase="elZERo";

// let sw=swappingCase.split("").map(function (ele){
//     return ele===ele.toUpperCase()? ele.toLocaleLowerCase():ele.toUpperCase();
// }).join();

// console.log(sw);

// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//       // Write Your Code Here
//       // Osama Mohamed => Osama M.
//       // Ahmed ali => Ahmed A.
//       let arry=[];
//       let count=0;
//       for(let i=0 ;i<zName.length ;i++){
//         arry.push(zName[i]);
//         if(count==1){
//             arry.push(".");
//             break;
//         }
//         if(zName[i]===" "){
//             count=1;
//         }
//       }
//       return "Hello "+arry.join("");

//     }
//     function ageWithMessage(zAge) {
//       // Write Your Code Here
//       // 38 Is My Age => Your Age Is 38
//       // 32 Is The Age => Your Age Is 32
//       return ( ", Your age is "+parseInt(zAge));
//     }
//     function countryTwoLetters(zCountry) {
//       // Write Your Code Here
//       // Egypt => You Live In EG
//       // Syria => You Live In SY
//       return ( ", You live in "+zCountry.slice(1,3).toUpperCase());
//     }
//     function fullDetails() {
//         // Write Your Code Here
//     let name=namePattern(zName);
//       let age=ageWithMessage(zAge);
//       let country=countryTwoLetters(zCountry);
//       return name+age+country;
      
//     }
//     return fullDetails(); // Do Not Edit This
//   }
  
//   console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
//   console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY


  // let mix="A13BS2ZX";

  // let element=mix.split("").filter(function (ele){
  //   return Number(parseInt(ele));
  // }).join("");

  // // element=mix.map(function (ele){
  // //   return ele
  // // })

  // console.log(element);



  /*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// let check = theBiggest.reduce(function (acc, current) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(acc.length > current.length ? acc : current);
//   console.log(`#############`);
//   return acc.length > current.length ? acc : current;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });

// console.log(finalString);




/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// // console.log(myString.split(""));
// let solution = myString.split("").filter(function (ele){
// return ! (ele===","|| ! (isNaN(parseInt(ele))));

// }).map(function(ele){
  
//   return ele==="_"? " ":ele;
// })
// .reduce(function (acc,current){ 
//   // return (acc.slice(-1)!==" " && current===current.toUpperCase()? "":`${acc}${current}`);
//     return acc===current? `${acc}`:`${acc}${current}`;
//     // console.log(acc);
// })
// console.log(solution);

// console.log(solution); // Elzero Web School
// console.log(solution); // Elzero Web School


/*
  Object
  - Nested Object And Trainings
*/

// let available = true;

// let user = {
//   name: "Osama",
//   age: 38,
//   skills: ["HTML", "CSS", "JS"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]); // Access With Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);

// console.log(user.checkAv());




// Method One
// Create Your Object Here
// let objMethodOne={
//   property:"Mehtod one"
// }

// console.log(objMethodOne.property); // "Method One"


// // Method Two
// // Create Your Object Here
// let objMethodTwo=new Object({
//   property:"Mehtod two"
// })

// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
// let objMethodThree=Object.create({});
// objMethodThree.property="Method three";

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here

// let objMethodFour=Object.assign({},{property:"method four"});

// console.log(objMethodFour.property); // "Method Four"




// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line
// let finalObject=Object.assign({},a,threeNums,twoNums)

// console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/



// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?``````q      
let objectLength = Object.keys(myFavGames).length;
console.log(objectLength)

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ???????`);
//   console.log(`The Publisher Is ???????`);
//   console.log(`The Price Is ???????`);

//   // Check If Nested Object Has Property (bestThree)
//   if (???????) {
//     console.log("- Game Has Releases");
//     console.log(`First => ???????`);
//     console.log(`Second => ???????`);
//     console.log(`Third => ???????`);
//   }
//   console.log("#".repeat(20));
// }

// // Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"




//DOM -->document object model

//get element by id
//get elements by class  -->one or more elements and can access by indexing
//get elements by TagName -->one or more elements and can access by indexing

// querySelector(". or # (any css selector)") -->but get the first element with same class 
// you can use querySelectorAll -->to get all elements with same classes 




/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <span>Main.js</span> File";
// myElement.textContent = "Text From <span>Main.js</span> File";

// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://twitter.com");
// myLink.setAttribute("title", "Twitter");


/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log(`Not Found`);
// }

// if (myP.hasAttributes()) {
//   console.log(`Has Attributes`);
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//   console.log(`Has Attributes`);
// } else {
//   console.log(`Div Has No Attributes`);
// }

//create element and add it to page

// let myElement=document.createElement("div");
// let myAttribute=document.createAttribute("data-set");
// let text=document.createTextNode("product one");
// myElement.setAttribute("class","p");
// // console.log(myElement);

// myElement.setAttributeNode(myAttribute);
// myElement.appendChild(text);

// //append element to page
// document.body.appendChild(myElement);

// for(let i=0;i<100;i++){
  
// let myElement=document.createElement( `div`);
// let h=document.createElement(`h2`);
// let p=document.createElement(`p`)
// let textH=document.createTextNode(`This is h3 ${i+1}`);
// let textp=document.createTextNode(`This is paragraph ${i+1}`);

// myElement.className=`product ${i+1}`;

// p.appendChild(textp);
// h.appendChild(textH);

// myElement.appendChild(h);
// myElement.appendChild(p);

// // console.log(myElement);
// // myElement

// document.body.appendChild(myElement); 
// }

// Element.children-->all children in element include text and any thing
// element.childNodes-->all childrens in element Not text and so on
// firstchild-->first thing in element
// firstElementChild-->first child element in main element


/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;dddd
//   }

//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));

// element.onclick = function () {
//   element.classList.toggle("show");
// };

/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function () {
//   two.focus();
// };

// one.onblur = function () {
//   document.links[0].click();
// };







//Assigment


// for(let i=0;i<10;i++){
//   let de=document.images[i];
//   de.src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   de.alt="Elzero Logo";
  
// }

// let input=document.querySelector("[name='dollar']");
// let dev=document.querySelector(".result");

// input.onchange=function(){

// {
//   /* <div class="result">{0} USD Dollar = {0} Egyptian Pound</div> */}
//   dev.innerHTML=`<div>${input.value} USD Dollar = ${(input.value *15.6).toFixed(2)} Egyptian pound </div>`
// }



// let dev1=document.querySelector(".one")
// let dev2=document.querySelector(".two");

// dev1.textContent=dev2.textContent;
// dev1.title=dev2.title;

// for(let i=0;i<5;i++){
//   let img=document.images[i];
//   if(img.hasAttribute("alt")){
//       img.alt="old";
//   }
//     else{
//       img.alt="Elzero new";
//     }
//   }



/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");

// element.remove();

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

// let span = document.querySelector(".two");

// console.log(span.parentElement);

// span.onclick = function () {
//   span.parentElement.remove();
// }

/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-clone`;

// myDiv.appendChild(myP);


// document.addEventListener('click',function(e){
//   console.log(e);
// })



/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

// let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error






// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   document.body.appendChild(newP);
// };

// // let cloned = document.querySelector(".clone"); // Error

// // cloned.onclick = function () {
// //   console.log("Iam Cloned");
// // };

// document.addEventListener("click", function (e) {
//   if (e.target.className === "clone") {
//     console.log("Iam Cloned");
//   }
// });


// let p1=document.querySelector("p");
// // console.log(p1);
// p1.remove();

// let div=document.querySelector(".our-element");





// // let div2=document.createElement("div");
// // let div2Text=document.createTextNode("end");

// // div2.appendChild(div1Text);
// // div2.setAttribute("class","end")
// // div2.setAttribute("title","end element")
// // div2.setAttribute("data-view","end")
// let div1,div2;
// for(let i=0;i<2;i++){
//   if(i===0){
//      div1=document.createElement("div");
//     let div1Text=document.createTextNode("start");
    
//     div1.appendChild(div1Text);
//     div1.setAttribute("class","start")
//     div1.setAttribute("title","start element")
//     div1.setAttribute("data-view","start")
//     document.body.appendChild(div1)

//   }
//   else{
    
//  div2=document.createElement("div");
// let div2Text=document.createTextNode("end");

// div2.appendChild(div2Text);
// div2.setAttribute("class","end")
// div2.setAttribute("title","end element")
// div2.setAttribute("data-view","end")
// document.body.appendChild(div2)

//   }
// }


// div.before(div1);
// div.after(div2);

// let s=document.querySelector("span");
// // let next;
// // for(;;){
// //   next=s.nextSibling;
// //   if(next==="Elzero"){
// //     console.log(next)
// //     break;
// //   }
// //   else{
// //     next.nextSibling.remove();
// //   }
// // }

// console.log(s.nextSibling.remove())


// let handler=setTimeout(function (){
//   console.log(`hi`);
// },2000);


// clearTimeout(handler)


/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

// let div = document.querySelector("div");

// function countdown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }

// let counter = setInterval(countdown, 1000);


/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host  //with port
  --- hash   //specific element in page
  --- protocol  //http or https 
  --- reload()
  --- replace()  // remove the previous page from history
  --- assign()   // don't remove the previous page from history
*/

console.log(location);
console.log(location.href);
console.log(location.hostname)
console.log(location.host)

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);   // with port
// console.log(location.hostname);  //with no port

// console.log(location.protocol);  //like:https

// console.log(location.hash);  // any section in the page





// setTimeout(function(){
//   window.open("https://google.com","_blank","width:200,left:100");
// },2000)


/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

// console.log(history);




/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });



/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

// let btn = document.querySelector("button");

// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };

// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// };



/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// // Set
// window.localStorage.setItem("color", "#F00");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// // Get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// // Remove One
// // window.localStorage.removeItem("color");

// // Remove All
// // window.localStorage.clear();

// // Get Key
// console.log(window.localStorage.key(0));

// // Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);




/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a = "A", b, c, d, e = "Osama"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // console.log(myFriends[4]);

// let [, y, , z] = myFriends;

// console.log(y);
// console.log(z);.



/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// // console.log(myFriends[3][2][1]);

// // let [, , , [a, , [, b]]] = myFriends;

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a); // Shady
// console.log(b); // Gamal



/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

// let book = "Video";
// let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

// [book, video] = [video, book];


// console.log(book);
// console.log(video);


/*
  Destructuring
  - Destructuring Object
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
// const { theName, theAge, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);


// let user={ 
//   name:"disha",
//   age:22,
//   skills:{
//     html:"good",
//     css:"very good"
//   }
// }

// const{name:n,age:a,skills:{html:h}}=user;
// console.log(n)
// console.log(a)
// console.log(h)


/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "Red",
//   skills: { html: h, css },
// } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);



/*
  Destructuring
  - Destructuring Function Parameters
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// showDetails(user);

// // function showDetails(obj) {
// //   console.log(`Your Name Is ${obj.theName}`);
// //   console.log(`Your Age Is ${obj.theAge}`);
// //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// // }

// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }


/*
  Destructuring
  - Challenge
*/

// let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// let condition;
// if(chosen===1){
//   let [ {title:t,age:a,available:v,skills:[,one]},,]=myFriends;
//   if(v===true){
//      condition="available";
//   }
//   else{
//     condition="Not available";
//   }
//   console.log(t)
//   console.log(a)
//   console.log(condition)
//   console.log(one)
// }
// else if(chosen===2){
//   let [ ,{title:t,age:a,available:v,skills:[,one]},]=myFriends;
//   if(v===true){
//      condition="available";
//   }
//   else{
//     condition="Not available";
//   }
//   console.log(t)
//   console.log(a)
//   console.log(condition)
//   console.log(one)
// }
// else if(chosen===3){
//   let [ ,,{title:t,age:a,available:v,skills:[,one]}]=myFriends;
//   if(v===true){
//      condition="available";
//   }
//   else{
//     condition="Not available";
//   }
//   console.log(t)
//   console.log(a)
//   console.log(condition)
//   console.log(one)
// }


/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

// let myData = [1, 1, 1, 2, 3, "A"];
// // let myUniqueData = new Set([1, 1, 1, 2, 3]);
// // let myUniqueData = new Set(myData);
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();

// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");

// console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]);

// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);



/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet);

// // Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// // Values + Keys [Alias For Values]
// let iterator = mySet.keys();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// // forEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// // Type Of Data

// let myws = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myws);





/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   "10": "String",
// };

// console.log(myNewObject[10]);

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({a: 1, b: 2}, "Object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);



// Map method


// let myMap=new Map([
//   ["name","ali"],
//   ["age",40]
// ]);

// console.log(myMap);

// myMap.set("year",2023);
// console.log(myMap);

// myMap.delete("year")
// console.log(myMap);
// console.log(myMap.get("name"));


// console.log(Array.from("1235523",function(n){
//    return +n + +n;
// })
// );


// let myArry=[10,20,30,40,50,"A","B"];

// myArry.copyWithin(1,-2,-1);   //target  start  end
// console.log(myArry);












/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let myNumber = 10;

// // let check = nums.some(function (e) {
// //   console.log("Test");
// //   return e > 5;
// // });

// let check = nums.some(function (e) {
//   return e > this;
// }, myNumber);

// // let check = nums.some((e) => e > 5);

// console.log(check);

// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkValues(nums, 20));
// console.log(checkValues(nums, 5));

// let range = {
//   min: 10,
//   max: 20,
// };

// let checkNumberInRange = nums.some(function (e) {
//   // console.log(this.min);
//   // console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range);

// console.log(checkNumberInRange);











// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   50: "Place 3",
//   40: "Place 4",
// };

// let mainLocation = 15;

// let locationsArry=Object.keys(locations).map((e)=> +e);

// let checkLocation=locationsArry.every(function(e){
//     return e>this;
// },mainLocation)

// console.log(checkLocation);









/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

// console.log("Osama");
// console.log(..."Osama");
// console.log([..."Osama"]);

// Concatenate Arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);

// // Copy Array

// let copiedArray = [...myArray1];
// console.log(copiedArray);

// // Push Inside Array

// let allFriends = ["Osama", "Ahmed", "Sayed"];
// let thisYearFriends = ["Sameh", "Mahmoud"];

// allFriends.push(...thisYearFriends);

// console.log(allFriends);

// // Use With Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(...myNums));

// // Spread With Objects => Merge Objects

// let objOne = {
//   a: 1,
//   b: 2,
// };
// let objTwo = {
//   c: 3,
//   d: 4,
// };

// console.log({ ...objOne, ...objTwo, e: 5 });

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/



let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log("Your Solution Here"); // 210

console.log(...new Set(n1));


/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

// let myString = "Hello Elzero Web School I Love elzero";

// let regex = /elzero/ig;

// console.log(myString.match(regex));











/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe));

// let nums = "12345678910";
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));

// let notNums = "12345678910";
// let notNsRe = /[^0-2]/g;
// console.log(notNums.match(notNsRe));

// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));












// let myString = "AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let numsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(specials));






let text = "re, green, red,  gren, gr, blue, yellow";
let result = text.match(/(red|green)/i);
console.log(result);  








/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// let word = /\w/g;
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));











/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let reg = /(spam\b|\bspam)/i;
// console.log(names.match(reg));


// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re));


// console.log(re.test(names));
// console.log(/(\bspam|spam\b)/ig.test("Osama"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));



















/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let mailsRe = /\w+@\w+.(com|net)/ig;
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));




/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S












/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));

// console.log(names.match(/\d\w{5}(?=Z)/ig));
// console.log(names.match(/\d\w{6}(?=ed)/ig));
















/*
Regular Expression

- replace
- replaceAll
*/

// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));
// let re = /@/ig;
// console.log(txt.replaceAll(re, "JavaScript"));
/*
  Regular Expression
  - Challenge
*/
// console.log(txt.replaceAll(/@/ig, "JavaScript"));

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';


// // let re=/(https?)?:?(\/\/)?(www.)?\w+.\w+(:\w+\/\w+.\w+\W\w+\W\d+\W\w+\W\w+)?/ig
// let re=/(https?)?:?(\/\/)?(www.)?\w+.\w+(:\d+\D+\d+\D+)?/ig

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));





















/*
  Constructor Function
*/

// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };
















/*
  Constructor Function
  - New Syntax
*/

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userOne instanceof User);
// console.log(userOne.constructor === User);

















/*
  Constructor Function
  - Deal With Properties And Methods
*/

// class User {
//   constructor(id, username, salary) {
//     // Properties
//     this.i = id;
//     this.u = username || "Unknown";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     };
//   }
//   // Methods
//   writeMsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.writeMsg());

// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userTwo.msg); // Native Code
// console.log(userTwo.writeMsg); // Native Code
















// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let reg=/./ig;

// console.log(ip.match(reg));

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let reg=/os\w+o/ig;
// console.log(specialNames.match(reg));

// Output
// ['Os10O', 'OsO', 'Os100O']


// let phone = "+(995)-123 (4567)";

// let reg=/\D\(\d{3}\)\D\d{3}\s\(\d{4}\)/ig
// console.log(phone.match(reg));  