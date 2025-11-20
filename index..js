
let div=document.createElement("div");
div.id="id";
div.className="class";
div.innerHTML="<p>this is p tag </p>";

document.body.appendChild(div)


let text=document.createTextNode("trct");
div.appendChild(text);