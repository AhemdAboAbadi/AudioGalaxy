const body = document.querySelector("body");
const container = document.createElement("div");
body.appendChild(container);
const loadMore = document.getElementById("load-anchor");
const loader = document.querySelector(".loader");
const welcoming = document.getElementById("welcoming");

const createArticle = (i) => {
  //-----------------Creat Elements------------------------
  const mainFigure = document.createElement("figure");
  const DivImg = document.createElement("div");
  const imgD = document.createElement("img");
  const ContainerContent = document.createElement("div");
  const FirstLine = document.createElement("div");
  const H2 = document.createElement("h2");
  const Btn = document.createElement("button");
  const SecondLine = document.createElement("div");
  const ParagraphFavorites = document.createElement("a");
  const ThirdLine = document.createElement("div");
  const ParagraphArticle = document.createElement("p");
  const FourthLine = document.createElement("div");
  const ParagraphDate = document.createElement("p");
  const fontAwesome = document.createElement("i");

  //---------------Append Childs---------------------------
  container.appendChild(mainFigure);
  mainFigure.append(DivImg, ContainerContent);
  DivImg.appendChild(imgD);
  ContainerContent.append(FirstLine, SecondLine, ThirdLine, FourthLine);
  FirstLine.append(H2, Btn);
  SecondLine.appendChild(ParagraphFavorites);
  ThirdLine.appendChild(ParagraphArticle);
  FourthLine.appendChild(ParagraphDate);
  Btn.appendChild(fontAwesome);
  container.appendChild(mainFigure);

  //-------------Append Elements---------------------------
  container.classList.add("main-contenar");
  mainFigure.classList.add("main-contenar-content");
  imgD.classList.add("imges0");
  DivImg.classList.add("contenar-img");
  ContainerContent.classList.add("contenar-content");
  FirstLine.classList.add("first-line");
  SecondLine.classList.add("second-line");
  ThirdLine.classList.add("Third-line");
  Btn.classList.add("volume-btn");
  H2.classList.add("h2-title");
  ParagraphFavorites.classList.add("p-add-to-favorites");
  ParagraphArticle.classList.add("p-article");
  FourthLine.classList.add("fourth-line");
  ParagraphDate.classList.add("p-date");
  ParagraphFavorites.textContent = "Add To Favorites";
  fontAwesome.classList.add("fa", "fa-volume-up");
  fontAwesome.setAttribute("aria-hidden", "true");

  if (i.url == undefined || i.url == "" || i.media_type == "video") {
    return;
  } else {
    imgD.src = i.url;
    H2.textContent = i.title;
    ParagraphArticle.textContent = i.explanation;
    ParagraphDate.textContent = i.date;
  }
};
