const NasaAPIKey = "29r852l7qXSPuClARF1GnNcuC2aL2ybXHzXS2gOk";
const NasaAPI = `https://api.nasa.gov/planetary/apod?count=10&api_key=${NasaAPIKey}`;
const NasaPicOfDay = `https://api.nasa.gov/planetary/apod?api_key=${NasaAPIKey}`;

const fetch = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            cb(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404) {
            alertMess("ERROR");
        }
    };
    xhr.open("GET", url);
    xhr.send();
};

const alertMess = (error) => {
    alert("404 Not found");
};
const getArticles = () => {
    fetch(NasaAPI, (data) => {
        console.log(data);
        setInterval(() => {
            loader.classList.add("hidden");
        }, 2000);
        data.forEach((i) => {
            createArticle(i);
        });
    });
};
getArticles();
const getPictureOfDay = () => {
    fetch(NasaPicOfDay, (data) => {
        selector(".title").textContent = data["title"];
        selector(".picture").src = data["url"];
        selector(".date").textContent = data["date"];
    });
};
getPictureOfDay();

selector("#load-anchor").addEventListener("click", () => {
    clearContainer();
    getArticles();
});