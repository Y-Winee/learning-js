const btn = document.querySelector("#nav-btn");
const section = document.querySelector("#nav-sec");
const lists = document.querySelectorAll(".custom");
const showResult = document.querySelector("#result");
const google = document.querySelector("#google");
const yt = document.querySelector("#youtube");

google.setAttribute("href", "https://www.youtube.com");
google.removeAttribute("target");

btn.onclick = () => {
    section.classList.toggle("translate-x-full");
};

lists.forEach((list) => {  
    list.onclick = () => {
        list.classList.toggle("bg-gray-400");
        const countSelected = document.querySelectorAll(".custom.bg-gray-400");
        showResult.innerText = countSelected.length;
    };
})