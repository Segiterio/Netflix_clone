import Data from "./Links.json"

const Links = document.querySelector(".Links");
console.log(Links);

for(let x of Data)
{
   const link = document.createElement("a");
   link.href = "#";
   link.textContent = x;
   link.style.minWidth = "10rem"
   Links.appendChild(link);
}

