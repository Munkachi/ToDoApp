module.exports = getDate;

function getDate(languageFormat) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    var day = today.toLocaleDateString(languageFormat, options);
    return day;

}