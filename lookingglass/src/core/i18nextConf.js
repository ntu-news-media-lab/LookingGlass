import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEN from "../locale/en.json";
import translationID from "../locale/id.json";


const fallbackLng=['en'];
const availableLanguages =['en','id'];
const resources = {
    en:{
        translation:translationEN
    },
    id:{
        translation:translationID
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,
        debug:false,
        whitelist: availableLanguages,
    })

export default i18n;