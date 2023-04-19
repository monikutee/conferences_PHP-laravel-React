import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        debug: false,
        react: {
            useSuspense: true,
        },
        backend: {
            loadPath: "http://0.0.0.0:8000/api/translations/{{lng}}",
            allowMultiLoading: false,
        },
        fallbackLng: "en",
        missingKeyHandler: (lngs, ns, key) => {
            console.info("Missing key translation key", key, lngs);
        },
        preload: ["en"],
    });

export default i18n;
