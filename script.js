const lista = document.querySelector("#lista");
const nav = document.querySelector(".navigation");

// eventos

lista.addEventListener("click", ()=>{
    nav.classList.toggle("aparecer")
    nav.classList.add("animacao");
})

const box = document.querySelector(".box");
box.addEventListener("click", (i)=>{
    i.target.src = "https://punksubsp.itch.io/spacewars"
})
// animar





