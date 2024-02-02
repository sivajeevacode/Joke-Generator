//select joke,btn
var joke=document.getElementById("joke")
var btn=document.getElementById("btn")
var url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
//api implementation
let random = ()=>{
    fetch(url)

     .then(jos=> jos.json())

     .then(data=>{
        joke.textContent=`${data.setup}`
     })
     
}
btn.addEventListener('click',random)
random();