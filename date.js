exports.getDate = function(languageFormat) {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    return today.toLocaleDateString(languageFormat, options);
}

exports.getDay = function(languageFormat) {

    const today = new Date();

    const options = {
        weekday: "long",
    }

    return today.toLocaleDateString(languageFormat, options);
}