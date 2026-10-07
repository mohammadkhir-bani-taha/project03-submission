const title = document.getElementById("title");
const message = document.querySelector(".message");

title.textContent = "JavaScript Changed This Title";

message.textContent = "The DOM has been modified";

title.style.color = "blue";

message.classList.add("active");


