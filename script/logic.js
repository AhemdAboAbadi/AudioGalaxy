const greetings = (time) => time > 12 ? "Good Evening" : "Good Morning";

if (typeof module !== "undefined") {
    module.exports = { greetings };
}