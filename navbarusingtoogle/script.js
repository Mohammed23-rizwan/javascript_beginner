const btnclick = document.getElementById("menu")
const menubar = document.getElementById("add")

btnclick.addEventListener('click',()=>{
    const toogle = menubar.classList;
    // if(toogle.contains('menushow')){
    //     toogle.remove('menushow')
    // }else{
    //     toogle.add('menushow')
    // }

    toogle.toggle('menushow')

})