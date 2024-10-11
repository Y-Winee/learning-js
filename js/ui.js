const root = document.querySelector("#root");
root.classList.add("p-4")

//create html elements
const heading = document.createElement("h1");
heading.innerText = "Hello World";

const para = document.createElement("p");
para.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id odio, porro harum dignissimos, provident omnis labore, perspiciatis molestias veniam rerum voluptates nostrum voluptatem. Sit, nam sequi? Repudiandae vel dolore quibusdam!"

// adding attributes to elements
heading.title = "Greeting";

//adding classes to elements
heading.classList.add("text-3xl", "text-gray-700", "font-bold", "font-serif");

//append elements to root
root.append(heading);
root.append(para);