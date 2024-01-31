my_Arry=[
    {
       "id":0,
       "name":"Vimal Raj",
       "work":"ui/ux designer",
       "info":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cum architecto expedita velit temporibus quam.",
       "imgg":"https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
    },
    {
       "id":1,
       "name":"rizwan",
       "work":"ui/ux designer",
       "info":"repudiandae voluptates illum praesentium, in ad laudantium. Neque enim in illo nisi, sapiente aut fuga, dolores, ab error optio quam a quas quisquam!",
       "imgg":"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODc0N2Q4Yy05MWU3LTQ1NzgtOGU3OC03N2ZlYmQwZWQ4MTkucG5n.png"
    },
    {
       "id":2,
       "name":"Azhar",
       "work":" designer",
       "info":"quasi vero reprehenderit molestias aspernatur earum quia provident dolores consectetur amet perferendis impedit expedita",
       "imgg":"https://toppng.com/uploads/preview/vector-little-boy-character-boy-cartoon-characters-11563010808cjeknvvslo.png"
    },
    {
       "id":3,
       "name":"Moorthi",
       "work":"devloper ",
       "info":"blanditiis! Aspernatur, ab nam ex quas, blanditiis natus optio soluta aliquam deleniti atque quae sunt distinctio odit dolores.",
       "imgg":"https://cdn3.vectorstock.com/i/1000x1000/27/42/happy-cartoon-boy-young-character-portrait-vector-18962742.jpg"
    },
    {
       "id":4,
       "name":"aswin",
       "work":"web designer",
       "info":"aspernatur vel quidem tenetur accusamus labore. Reprehenderit, dolores possimus voluptatem tenetur eos consequuntur nostrum praesentium ",
       "imgg":"https://neural.love/cdn/thumbnails/1edaaae2-7e32-664a-b6d1-b32c5060ac42/e8e41337-4233-5402-ad30-27860edc03cf.webp?Expires=1709251199&Signature=g6GWozDVZv1eeBcNIPfP-IY4LO8zeLqVdIKLoAhl2C23c8ePziA5W~ZU1doTwkGATUQgc3k0fKs8jEJIEC0CDuzPae3Z5JNiIcO4Miz3yEzTOQQtbDYBdtAvH9rj3WbBgqoL~WAdWokdVofeuCLsqq6rVWBTrhP5JYVi1MnAcbxvvAUF42dgvNhpy0wR6PeScmEo1zXNaok~bD9CojzFbzY1MEtgS-vpv5uRbVzORzElY72GVffNmVXLv2yLazgsnw~b1TsCIZ9T-xXW-OnaxBoqJv4MceKSCCUTPNLJhHhXNRH~ptTb2pZD-1t8ibxWdiO8C0reCzjBKtr7jZ83tw__&Key-Pair-Id=K2RFTOXRBNSROX"
    }
]

const displayname = document.getElementById('name')
const work = document.getElementById('work')
const inform = document.getElementById('information')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const images = document.getElementById('imggs')
let current = 0;

window.addEventListener('DOMContentLoaded',()=>{
    showperson()
    next.addEventListener('click',()=>{
        current++
        if(current>my_Arry.length-1){
            current =0
        }
        showperson()
    })
    prev.addEventListener('click',()=>{
        current--
        if(current<0){
            current = my_Arry.length-1
        }
        showperson()
    })
})


function showperson(){
    const item = my_Arry[current]
    displayname.textContent = item.name
    work.textContent = item.work
    inform.textContent = item.info
    images.src = item.imgg 
}

