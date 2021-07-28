const getArticles = () => {
  fetch(NasaAPI, (data) => {
    data.forEach((i) => {
      createArticle(i);
    });
  });
};
getArticles();
loadMore.addEventListener("click", () => {
  clearContainer();
  getArticles();
});
const clearContainer = () => {
  while (container.firstChild) container.removeChild(container.firstChild);
};

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
