// console.log(window)
// console.log(window.document) or console.log(document)
// console.dir(document)


// after model 
// console.log(document.)
// console.log(document.baseURI)
// console.log(document.links)

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">

//     <title>Dom learning</title>
// </head>
// <body>
//     <div class="bg-black">
//         <h1 class="heading">learning at Web_Bocket</h1>
//         <p>Lorem ipsum dolor sit amet</p>
//     </div>
// </body>
// </html>
// collections are not array we can convert it to array.
// console.log(document.links[2])


// document.getElementById('firstHeading')//We will do with wikipedia page

// //If you want to manipulate then 
// document.getElementById('firstHeading').innerHTML = "<h1>Web_Bocket</h1>"

// //All DOM selectors NodeList an HTMLCollection
// document.getElementById('title')
// document.getElementById('title').id
// document.getElementById('title').class
// document.getElementById('title').className
// document.getElementById('title').getAttribute
// document.getElementById('title').getAttribute('id')
// document.getElementById('title').getAttribute('class')
// document.getElementById('title').setAttribute('class','test') //it will override the previous classname

// document.getElementById('title').setAttribute('class','test heading') 
// const title = document.getElementById('title')


// title 
// title.style.backgroundColor='green'
// title.style.padding = "15px"
// title.style.borderRadius = "15px"
// title
// title.textContent
// title.innerHTML
// title.innerText


// document.getElementByclassName('heading')
// document.querySelector('h1')
// document.qureySelector('#title')
// document.qureySelector('.heading')
// document.querySelector('input[type="password"]')
// document.querySelector('p:first-child')
// document.querySelector('ul')
// const myUL = document.querySelector('ul')
// myUL.querySelector('li')
// const turnGreen = myUL.querySelector('li')
// turnGreen.style.backgroundcolor = "green"
// turnGreen.style.padding = "20px"
// turnGreen.innerText
// turnGreen.innerText = "Eight"


// QuerySelectorAll
// document.querySelectorAll('li')
// there will be a prototype named forEach

// const tempList = document.querySelectorAll('li')
// tempList
// tempList.style.color = "red" //this will not work on node collection
// tempLiList[0].style.color="red"

// const myh1 = document.querySelectorAll('h1')
// myh1
// tempLiList.forEach(function(listItem) {
//     listItem.style.backgroundcolor="yellow"
// })

// document.getElementByclassName("list-item")
// const tempClassList = document.getElementByClassName('list-item')
// tempClassList
// tempClassList.forEach(function(li){
// console.log(li)
// })

// for converting collection to array
// Array.from((tempClassList))
// const myConvertedArray = Array.from(tempClassList)
// myConvertedArray.forEach(function(li){
// console.log(li)
// li.style.color="blue"
// })