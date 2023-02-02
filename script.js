"use strict"
// Ստեղծել Select գույներով և գրելկոդ, որի դեպքում  թեթ փոխենք select-ով ընտրված գույնը՝ body-ն կներկվի համապատասխան գույնով, և կպահպանվի ռեֆռեշից հետո
const select = document.querySelector("#bodyColors")
const body = document.body
select.addEventListener("change", changeColor)
function changeColor(e,color) {
    body.style.backgroundColor = color
    localStorage.setItem("backgroundColor",color)
    const colors = e.target.value;
switch (colors) {
    case e.target[1].value:
        changeColor(e,"red")
        break;
    case e.target[2].value:
        changeColor(e,"blue")
        break;
    case e.target[3].value:   
         changeColor(e,"orange")
         break;
    case e.target[4].value:
        changeColor(e,"green")
        break;
    case e.target[5].value:
        body.style.backgroundColor = "black";
        alert("Da meqenayi maknish e");
        break;
    default:
        alert("Yntreq guyn");
        break;
    }
}
if (localStorage.getItem("backgroundColor") !== null) {
    const color = localStorage.getItem("backgroundColor")
    body.style.backgroundColor = color
}