const btn = document.querySelector("#nav-btn");
const section = document.querySelector("#nav-sec");

btn.onclick = () => {
    section.classList.toggle("translate-x-full");
};