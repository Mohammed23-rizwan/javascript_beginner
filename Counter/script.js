const btnincrement = document.getElementById('increment')
const btndecrement = document.getElementById('decrement')
const btnrestart = document.getElementById('restart')
const valuesdisplay =document.getElementById('vlue')


let value = 0;
btnincrement.addEventListener('click',()=>{
    value =value+1;
    valuesdisplay.innerText =value
})

btndecrement.addEventListener('click',()=>{
    if(value!=0){
        value = value-1;
        valuesdisplay.innerText = value
    }
})

btnrestart.addEventListener('click',()=>{
    value = 0;
    valuesdisplay.innerText = value
})

