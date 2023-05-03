const menu= document.querySelector("#menu-icon");
const navlist= document.querySelector(".navlist");

menu.addEventListener("click",()=>{
    menu.classList.toggle("open");
    navlist.classList.toggle("open");
})
document.querySelectorAll(".navlist").forEach(n => n.addEventListener("click", ()=>{
    menu.classList.remove("open");
    navlist.classList.remove("open");
}))
// ACTIVE LINK
const section =document.querySelectorAll("section");
const links = document.querySelectorAll("a");

window.onscroll = ()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            links.forEach(link =>{
                link.classList.remove("active");
                document.querySelector("header ul li a[href*="+ id +"]").classList.add("active");
            })
        }
    })
}


// TYPED SCRIPT HOME

var typed =  new Typed(".auto-type",{
    strings: ["UI/UX Developer","Web Developer","Web Designer","Frontend Developer","Flutter Developer","Python Developer","Django Developer","Backend Developer","Fullstack Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
// TYPED SCRIPT FOOTER

var typed =  new Typed(".hero",{
    strings: ["Himanshu Chaurasia &#x2764;"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

