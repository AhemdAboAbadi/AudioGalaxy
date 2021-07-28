const loader = document.querySelector(".loader");
const timeNow = document.getElementById("timeNow");
const tts = window.speechSynthesis;
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

const createArticle = (i, id) => {
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
    const Btn = creatElement("button");
    const fontAwesome = creatElement("i");
    Btn.classList.add("volume-btn");
    Btn.setAttribute("id", `${id}`);
    addClass(fontAwesome, "fa");
    addClass(fontAwesome, "fa-volume-up");
    fontAwesome.setAttribute("aria-hidden", "true");
    appendElement(Btn, fontAwesome);
    appendElement(FirstLine, Btn);
    Btn.addEventListener("click", (e) => {
        fetch(`https://api.nasa.gov/planetary/apod?count=10&api_key=29r852l7qXSPuClARF1GnNcuC2aL2ybXHzXS2gOk`, (data) => {
            window.speechSynthesis.cancel();
            const text = data[id].explanation;
            const toSpeack = new SpeechSynthesisUtterance(`${text}`);
            const voice = tts.getVoices()[1];
            toSpeack.voice = voice;
            tts.speak(toSpeack);
        })
    })

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