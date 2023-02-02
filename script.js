"use strict"
// Ստեղծել «Promise», որը ստանալով  նախադասություն` գտնում է  այդ նախադասության մեջի ամենաերկար բառը, փոխանցում առաջ(then), հետո այն սարքել մեծատառ փոխանցել հաջորդին , հետո ստուգել այդ բառը 'PALINDROM' է թե ոչ։Օրինակ ԱՆՆԱ բառը
console.log("PALINDROM...")
let promise = new Promise((resolve) => {
    setTimeout(() => { 
        const arr = ["Yerevan", "the","capital", "of", "Armenia", "saippuakivikauppias", "palindrom"]
            resolve(arr)
        
    }, 2000)
})

promise
.then(word => {
    let longestWord = word.sort((a,b) => b.length - a.length)
    return longestWord[0]
    
})
.then(word => {
    let upperCase = word.toUpperCase()
    return upperCase
})
.then(word => {
    if(word == word.split("").reverse().join("")) {
        console.log("Ayo nuyn barn e ete kardanq hakarak")
    } else {
        throw new Error("error")
}
})
.catch(err => console.error("Voch ayd bar@ PALINDROM che"))


// 
const images = ["https://images.unsplash.com/photo-1519293978507-9c6bb9f82eda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1416862291207-4ca732144d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
"https://images.unsplash.com/photo-1575584239694-a408e5828be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]


const div = document.querySelector("#box")
setInterval(() => {
    let randomColor = Math.trunc(Math.random() * images.length);
    div.style.backgroundImage = 'url(' + images[randomColor] + ')'
}, 2000)



//













