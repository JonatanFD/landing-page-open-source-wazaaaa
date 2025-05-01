
const AVAILABLE_LANGUAGES = ["en", "es"];
const LANGUAGE_DICTIONARY = {
    en,
    es,
}
const DEFAULT_LANGUAGE = "es";


function changeLanguage(lang) {

    if (!AVAILABLE_LANGUAGES.includes(lang)) {
        console.error(`Language ${lang} is not supported.`);
        return;
    }

    const language = LANGUAGE_DICTIONARY[lang];

    const i18nElements = document.querySelectorAll("[i18n]");

    console.log("CURRENT DICTIONARY", language); 

    i18nElements.forEach((element) => {
        const key = element.getAttribute("i18n");

        const path = key.split(".");

        const value = path.reduce((acc, part) => {
            if (acc && acc[part] !== undefined) {
                return acc[part];
            }
            return null;
        }, language);

        if (value) {
            element.innerHTML = value;
        }
    });

    console.log(i18nElements);

}

function setLanguage(lang) {
    const currentLang = localStorage.getItem("lang") || lang;
    changeLanguage(currentLang);
    localStorage.setItem("lang", lang);
}


setLanguage(DEFAULT_LANGUAGE)