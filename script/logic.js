const body = document.querySelector("body");
const container = document.createElement("div");
body.appendChild(container);
const loadMore = document.querySelector("#load-anchor");

const NasaFunc = (() => {
  fetch(NasaAPI, (data) => {
    console.log(data);
    data.forEach((i) => {
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
      mainFigure.appendChild(DivImg);
      mainFigure.appendChild(ContainerContent);
      DivImg.appendChild(imgD);
      ContainerContent.appendChild(FirstLine);
      ContainerContent.appendChild(SecondLine);
      ContainerContent.appendChild(ThirdLine);
      ContainerContent.appendChild(FourthLine);
      FirstLine.appendChild(H2);
      FirstLine.appendChild(Btn);
      SecondLine.appendChild(ParagraphFavorites);
      ThirdLine.appendChild(ParagraphArticle);
      FourthLine.appendChild(ParagraphDate);
      Btn.appendChild(fontAwesome);
      FirstLine.appendChild(Btn)
      container.appendChild(mainFigure);

      //-------------Append Elements---------------------------
      container.classList.add("main-contenar")
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
      fontAwesome.classList.add("fa" ,"fa-volume-up");
      fontAwesome.setAttribute("aria-hidden", "true");

      // Btn.createTextNode('<i class="fa fa-volume-up" aria-hidden="true"c></i>')
      //--------------Passing values-------------------------
      if (i.url == undefined || i.url == "") {
        return;
      } else {
        imgD.src = i.url;
        H2.textContent = i.title;
        ParagraphArticle.textContent = i.explanation;
        ParagraphDate.textContent = i.date;
      }
    });
  });
})();


const pop_up_to_top = document.querySelector(".pop_up_to_top");
window.addEventListener("scroll", function () {
  pop_up_to_top.classList.toggle("active", window.scrollY > 400);
});

pop_up_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
