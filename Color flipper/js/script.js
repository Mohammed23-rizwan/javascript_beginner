const container = document.getElementsByClassName('container')
const btn =document. getElementById('btn')
const vluedisplay =document. getElementById('clrvalue')

let color_picker;
let alphabet =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]


btn.addEventListener('click',function () {
    let colorcode = '#'
    for(i=1;i<=6;i++){
        col=random()
        console.log(col)
        colorcode += alphabet[col]
        document.body.style.backgroundColor=colorcode;
        vluedisplay.innerText = colorcode.toUpperCase();
    }
})

function random(){
    return Math.floor(Math.random()*alphabet.length)
}