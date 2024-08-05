const headerUlLi = document.getElementsByClassName("header-ul-li");
const footerUlLi = document.getElementsByClassName("footer-ul-li");

for (let li of headerUlLi){
    li.addEventListener("mouseover", () => {
        li.style.color = "blue";
    })
}
for (let li of headerUlLi){
    li.addEventListener("mouseout", () => {
        li.style.color = "black"
    })
};

for (let li of footerUlLi){
    li.addEventListener("mouseover", () => {
        li.style.color = "blue";
    })
}
for (let li of footerUlLi){
    li.addEventListener("mouseout", () => {
        li.style.color = "white"
    })
};