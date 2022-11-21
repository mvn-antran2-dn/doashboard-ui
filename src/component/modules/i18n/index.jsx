import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../English/eng.json";
import French from "../French/fren.json";
import German from "../German/german.json";
import Dutch from "../Dutch/dutch.json";

const resources = {
    eng: {
        translation: English,
    },
    french: {
        translation: French,
    },
    german: {
      translation: German,
    },
    dutch: {
      translation: Dutch,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "eng",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;