const loader = document.querySelector(".loader");
const timeNow = document.getElementById("timeNow");
//Operating functions
let selector = (select) => {
    return document.querySelector(select);
};

const creatElement = (ele) => {
    return document.createElement(ele);
};

const appendElement = (parent, child) => {
    return parent.appendChild(child);
};

const addClass = (element, className) => {
    return element.classList.add(className);
};

// HTML Elements
const container = creatElement("div");
selector("body").appendChild(container);

const createArticle = (i) => {
    container.classList.add("main-contenar");

    // Card
    const mainFigure = creatElement("figure");
    addClass(mainFigure, "main-contenar-content");
    appendElement(container, mainFigure);

    // Image
    const DivImg = creatElement("div");
    addClass(DivImg, "contenar-img");
    const imgD = creatElement("img");
    addClass(imgD, "imges0");
    appendElement(DivImg, imgD);

    // Things bellow an image
    const ContainerContent = creatElement("div");
    addClass(ContainerContent, "contenar-content");
    const FirstLine = creatElement("div");
    addClass(FirstLine, "first-line");
    const H2 = creatElement("h2");
    H2.classList.add("h2-title");

    //Sound Button
    const fontAwesome = creatElement("i");
    addClass(fontAwesome, "fa", "fa-volume-up");
    fontAwesome.setAttribute("aria-hidden", "true");
    const Btn = creatElement("button");
    Btn.classList.add("volume-btn");
    appendElement(Btn, fontAwesome);

    //Button add favorites
    const SecondLine = creatElement("div");
    addClass(SecondLine, "second-line");
    const ParagraphFavorites = creatElement("button");
    addClass(ParagraphFavorites, "p-add-to-favorites");
    ParagraphFavorites.textContent = "Add To Favorites";
    appendElement(SecondLine, ParagraphFavorites);

    //Article
    const ThirdLine = creatElement("div");
    addClass(ThirdLine, "Third-line");
    const ParagraphArticle = creatElement("p");
    addClass(ParagraphArticle, "p-article");
    appendElement(ThirdLine, ParagraphArticle);

    //Date
    const FourthLine = creatElement("div");
    addClass(FourthLine, "fourth-line");
    const ParagraphDate = creatElement("p");
    addClass(ParagraphDate, "p-date");
    appendElement(FourthLine, ParagraphDate);

    mainFigure.append(DivImg, ContainerContent);
    ContainerContent.append(FirstLine, SecondLine, ThirdLine, FourthLine);
    FirstLine.append(H2, Btn);

    let unique = i.url;
    if (unique == undefined || unique == "" || i.media_type == "video") {
        return;
    } else {
        imgD.src = i.url;
        H2.textContent = i.title;
        ParagraphArticle.textContent = i.explanation;
        ParagraphDate.textContent = i.date;
    }
};
const clearContainer = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        loader.classList.remove("hidden");
    }
};
// Pop up
const pop_up_to_top = document.querySelector(".pop_up_to_top");
window.addEventListener("scroll", function() {
    pop_up_to_top.classList.toggle("active", window.scrollY > 400);
});

pop_up_to_top.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
timeNow.textContent = greetings(new Date().getTime());