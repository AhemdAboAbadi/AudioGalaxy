const greetings = (time) => {
    const msg = time > 12 ? "Good Evening" : "Good Morning";
    return msg;
};
if (typeof module !== "undefined") {
    module.exports = { greetings };
}
