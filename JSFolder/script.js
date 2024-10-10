let calculator = document.querySelector(".Calculator-container");
let numElements = [];
let opElements = [];
let AC= NaN;
let C = NaN;
let equal = NaN;
let del = NaN;
let exp = NaN;
let result = NaN;

exp = calculator.querySelector(".exp");
result = calculator.querySelector(".result");
AC = calculator.querySelector(".AC");
C = calculator.querySelector(".C");
del = calculator.querySelector(".del");
equal = calculator.querySelector(".equal");
numElements = calculator.querySelectorAll(".num");
opElements = calculator.querySelectorAll(".op");
exp.innerText = "";



equal.addEventListener('click',(e)=>{result.innerText = eval(exp.innerText)});
numElements.forEach((num)=>{
    num.addEventListener('click',(e)=>{exp.innerText+=num.innerText});
});
opElements.forEach((op)=>{
    op.addEventListener('click',(e)=>{exp.innerText+=op.innerText});
});
del.addEventListener('click',(e)=>{
    exp.innerText= exp.innerText.slice(0,-1);    
});

C.addEventListener("click",(e)=>{exp.innerText=""});
AC.addEventListener("click",(e)=>{
    exp.innerText="";
    result.innerText="";
});

