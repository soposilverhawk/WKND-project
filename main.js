const headerUlLi = document.getElementsByClassName("header-ul-li");
const footerUlLi = document.getElementsByClassName("footer-ul-li");
const infoForm = document.getElementById("s6-desc-input")

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



const adventuresBtn = document.querySelector("#adventures")

adventuresBtn.addEventListener("click", () => {
    const targetSection = document.querySelector("#section-4");
    const sectionTop = targetSection.offsetTop;
    window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
    });
})


const readMoreBtn = document.querySelector("#read-more-info");

readMoreBtn.addEventListener("click", () => {
    window.open("https://www.wikipedia.org/", "_blank");
})


let section4CoverImg = document.querySelector("#section-4-cover");
let section4CoverImgUrl = "url(/imgs/bckg2.png)"
let section5Imgs = document.querySelectorAll(".s5-animated-imgs");
let section5Headers = document.querySelectorAll(".s5-animated-txt");
let section4CoverHeader = document.querySelector("#section-4-h2");
let section4Desc = document.querySelector("#section-4-desc");
const section4CoverBaseHeader = "Climbing New Zealand";
const section4BaseDesc = "Let us help you make your New Zealand climbing vacation a memory you will cherish forever! Come join us for a guided rock climbing adventure in the mountains that trained Sir Edmund Hilary."

const s4NewDescs = [{
    desc: "Let us help you make your Mountain biking experience a memory you will cherish forever! Come join us for a guided rock climbing adventure in the mountains"
},
{
    desc: "Surf with the best surfers of Costa Rica with our assistance and enjoy the washing tides!"
},
{
    desc: "Conquer Mount Blanc with our ski touring experts! It's an experience worth of life-time!"
},
{
    desc: "Enjoy the amazing views of nature by camping near the river and experience the way that our ancestors used to live. Just you and nature away from the business of the cities and towns"
},
]


for (let i = 0; i < section5Imgs.length; i++) {
    section5Imgs[i].addEventListener("mouseover", function() {
        section4CoverImg.style.backgroundImage = `url(${section5Imgs[i].src})`;
        section4CoverHeader.innerText = section5Headers[i].innerText;
        section4Desc.innerText = s4NewDescs[i].desc
    });
    section5Imgs[i].addEventListener("mouseout", function () {
        section4CoverImg.style.backgroundImage = section4CoverImgUrl;
        section4CoverHeader.innerText = section4CoverBaseHeader;
        section4Desc.innerText = section4BaseDesc;
    })
}

const menu = document.querySelector("#menu");
const headerBottom = document.querySelector("#header-bottom");
const hiddenNavLi = [{
    li: "MAGAZINE"
},
{
    li: "AVENTURES"
},
{
    li: "FAQ"
},
{
    li: "ABOUT"
},
]




menu.addEventListener("click", () => {
    let hiddenNav = document.querySelector(".burger-menu")
    if (!hiddenNav){
        hiddenNav = document.createElement("div");
        headerBottom.appendChild(hiddenNav);
        hiddenNav.classList.add("burger-menu");
        hiddenNav.classList.add("hidden");
        const hiddenNavNav = document.createElement("nav");
        hiddenNav.appendChild(hiddenNavNav);
        const hiddenNavNavUl = document.createElement("ul");
        hiddenNavNav.appendChild(hiddenNavNavUl);
        for (let i = 0; i < 4; i ++){
            const hiddenNavNavUlLi = document.createElement("li");
            const hiddenNavNavUlLia = document.createElement("a");
            hiddenNavNavUlLia.href = ""
            hiddenNavNavUlLi.appendChild(hiddenNavNavUlLia);
            hiddenNavNavUl.appendChild(hiddenNavNavUlLi);
            hiddenNavNavUlLia.innerText = hiddenNavLi[i].li
            hiddenNavNavUlLia.addEventListener("mouseover", () =>{
                hiddenNavNavUlLia.style.color = "blue";
            })
            hiddenNavNavUlLia.addEventListener("mouseout", () =>{
                hiddenNavNavUlLia.style.color = "black";
            })
        }
        hiddenNavNav.classList.add("burger-menu-nav")
        hiddenNavNavUl.classList.add("burger-menu-ul")
    } else {
        hiddenNav.remove()
    }
})

const nextBtn = document.querySelector("#next-btn");
const previousBtn = document.querySelector("#previous-btn");
const section1 = document.querySelector("#section-1")
const section1imgCollection = [ "./imgs/s1image.png", "./imgs/mountain-biking.avif", "./imgs/bckg2.png"];
const indicators = document.querySelectorAll(".indicator")
let count = 0;

function markIndicators(){
    for(let indicator of indicators){
        indicator.classList.remove("selected")
    }
    indicators[count].classList.add("selected")
}

function getNextImg(imgUrls){
    if (count < imgUrls.length - 1){
        count++;
        section1.style.backgroundImage = `url(${imgUrls[count]})`
        console.log(count)
        console.log(section1.style.backgroundImage)
    }
    markIndicators();
}

function getPreviousImg(imgUrls){
    if(count > 0){
        count--;
        section1.style.backgroundImage = `url(${imgUrls[count]})`
    }
    markIndicators();
}

nextBtn.addEventListener("click", () => {
    getNextImg(section1imgCollection)
})

previousBtn.addEventListener("click", () => {
    getPreviousImg(section1imgCollection)
})

const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}

infoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInputValue = document.getElementById("email-input").value;
    const section6DescContainer = document.getElementById("section-6-desc")
    if(validateEmail(emailInputValue) === true) {
        const successMsg = document.createElement("p");
        successMsg.innerHTML = "You've successfully signed up"
        successMsg.style.color = "green";
        section6DescContainer.appendChild(successMsg);
    } else {
        const successMsg = document.createElement("p");
        successMsg.innerHTML = "Please enter a valid email address"
        successMsg.style.color = "red";
        section6DescContainer.appendChild(successMsg);
        console.log("test")
    }
})