const _NasaAPIKey = config.NasaAPIKey;
const _VoiceApiKey = config.VoicesAPIKey;
const NasaAPI = () =>
    `https://api.nasa.gov/planetary/apod?count=10&api_key=${_NasaAPIKey}`;

const VoicesAPI = (article) =>
    `https://api.voicerss.org/?key=${_VoiceApiKey}&hl=en-us&src=${article}`;

const fetch = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            cb(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404) {
            alertMess('ERROR');
        }
    };
    xhr.open('GET', url);
    xhr.send();
};

const alertMess = error => {
    alert('404 Not found');
};