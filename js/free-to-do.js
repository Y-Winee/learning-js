// window.onload = () => {
// create a couple of elements in an otherwise empty HTML page
//     const heading = document.createElement("h1");
//     const headingText = document.createTextNode("Big Head!");
//     heading.appendChild(headingText);
//     document.body.appendChild(heading);
//   };

// const div = document.querySelector("div");
// div.childNodes.forEach((child) => {
//   console.log(`Parent = ${div}, Child = ${child}`);
// })

// const btn = document.querySelector("#btn");
// console.dir(btn);

// const para = document.querySelectorAll(".para");
// para.forEach((p) => {
//   p.childNodes.forEach((c) => {
//     console.log(`${p}'s node value is ${c.nodeValue}`);
//   });
// });

// const para2 = document.querySelector("#pa");
// console.log(`para2 innerText is ${para2.innerText}`);


const div = document.querySelector("#first-div");
const delBtn = document.querySelector("#del-btn");

//error
const anotherDelete = () => {
  div.childNodes.forEach((child) => {
    child.remove();
  })
}

const deleteAll = () => {
  const children = Array.from(div.childNodes);
  children.forEach((child) => {
    child.remove();
  })
}

div.childNodes.forEach((child) => {
  console.log(child);
})

//sec test on whether it deletes white-spaces or line breaks first
const secDiv = document.querySelector("#sec-div");

const deleteSecDiv = () => {
  secDiv.removeChild("p");
}

delBtn.addEventListener("click", deleteAll);