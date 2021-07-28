const getArticles = () => {
    fetch(NasaAPI, (data) => {
        console.log(data)
        setInterval(() => {
            loader.classList.add("hidden");
        }, 2000)
        data.forEach((i) => {
            createArticle(i);
        });
    });
};
getArticles();
loadMore.addEventListener("click", () => {
    clearContainer();
    getArticles();
})
const clearContainer = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
        loader.classList.remove("hidden");
        welcoming.textContent = " Loading More ..."

    };
}
const welcomingText = (() => {
    const today = new Date();
    const time = today.getHours();
    const greetingMess = time < 12 ? "Good Morning" : "Good Evening";
    greetNow.textContent = greetingMess;
})();

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


const getPictureOfDay = () => {
    fetch(NasaPicOfDay, (data) => {
        title.textContent = data["title"];
        picture.src = data["url"];
        date.textContent = data["date"];

    });
};

getPictureOfDay();