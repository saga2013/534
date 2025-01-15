let num1 = prompt('Выбери 1-ое число')
let znak = prompt('Znak \n 1)* \n 2)/ \n 3)+ \n 4)-')
let num2 = prompt('2-ое число')

let num = Number(num1)
let num02 = Number(num2)

let div = document.createElement("div")
div.style.display="flex"
// div.style.gap="80px"
div.style.justifyContent="space-evenly"
div.style.backgroundColor="yellow"
div.style.width="600px"
div.style.height="200px"
div.style.paddingTop="60px"
div.style.marginLeft="400px"
div.style.marginTop="100px"
div.style.boxSizing="border-box"
document.body.appendChild(div)

let Q = document.createElement("div")

Q.style.width="70px"
Q.style.height="70px"
Q.style.color="white"
Q.style.textAlign ="center"
Q.style.lineHeight ="66px"
Q.style.fontSize="30px"
Q.innerHTML=num
div.appendChild(Q)

let z = document.createElement("div")

z.style.width="70px"
z.style.height="70px"
z.style.color="white"
z.style.textAlign ="center"
z.style.lineHeight ="66px"
z.style.fontSize="30px"
z.innerHTML=znak
div.appendChild(z)

let f = document.createElement("div")
f.style.width="70px"
f.style.height="70px"
f.style.color="white"
f.style.textAlign ="center"
f.style.lineHeight ="66px"
f.style.fontSize="30px"
f.innerHTML=num02
div.appendChild(f)

let btn =document.createElement("button")
btn.textContent="Check"
btn.style.backgroundColor="greenyelow"
btn.style.width="450px"
btn.style.height="60px"
btn.style.color="white"
btn.style.marginLeft="470px"
btn.style.marginTop="70px"
btn.style.fontSize="30px"
document.body.appendChild(btn)

let r =document.createElement("div")
r.style.backgroundColor="red"
r.style.width="450px"
r.style.height="80px"
r.style.marginLeft="470px"
r.style.marginTop="30px"
r.style.textAlign="center"
r.style.alignContent="center"
r.style.fontSize="30px"
r.style.color="white"
document.body.appendChild(r)

if(znak=="1"){
    let v = num*num02
    z.textContent="*"
    btn.addEventListener("click", function(){
        r.textContent=`Ответ: ${v}`
    })


}
if(znak=="2"){
    let x =num/num02
    z.textContent="/"
    btn.addEventListener("click", function(){
        r.textContent=`Ответ: ${x}`
    })
}
if(znak=="3"){
    let y =num+num02
    z.textContent="+"
    btn.addEventListener("click", function(){
        r.textContent=`Ответ: ${y}`
    })
}
if(znak=="4"){
    let w =num-num02
    z.textContent="-"
    btn.addEventListener("click", function(){
        r.textContent=`Ответ: ${w}`
    })
}
if(znak>"4"|| znak==0){
    alert(`Оператор выбран неправильно`)
    z.textContent=""

}