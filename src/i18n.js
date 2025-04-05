'use client'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const RTL_LANGUAGES = ['ar', 'ur']
const i18nConfig = {
    debug: true,
    fallbackLng: 'en',
    lng: 'hi',
    interpolation: {
        escapeValue: false,
    },
    direction: {
        detect: true,
        ltrLangs: ['en', 'fr', 'hi'],
        rtlLangs: RTL_LANGUAGES,
    },
    resources: {
        en: {
          translation: {
            hero:{
                head:"Worth Pink Salt",
                desc:"Pink Himalayan Salt is a type of rock salt that is mined from the KhewRaj salt mines in the Punjab region of Pakistan. It is known for its distinctive pink color and is often used as a decorative item in kitchens and bathrooms.",


            },
            consultation: "Free Consultation",
            time: "Mon-Fri: 09:00am - 10:00pm",
            email: "Email: info@worthpinkSalt.com",
            social: "Visit our social pages:",
            home: "Home",
            about: "About",
            services: "Services",
            contact: "Contact",
            getStarted: "Get Started"
          }
        },
        fr: {
          translation: {
            hero:{
                head:"Worth Pink Salt",
                desc:"Le sel rose himalayen est un type de sel de roche qui est extrait des mines de sel de KhewRaj dans la région du Pendjab au Pakistan. Il est connu pour sa couleur rose distinctive et est souvent utilisé comme élément décoratif dans les cuisines et les salles de bains.",
                },
            consultation: "Consultation gratuite",
            time: "Lundi-Vendredi: 09:00am - 10:00pm",
            email: "Courriel: info@worthpinkSalt.com",
            social: "Visitez nos pages sociales:",
            home: "Accueil",
            about: "À propos",
            services: "Services",
            contact: "Contact",
            getStarted: "Commencer"
          }
        },
        hi: {
          translation: {
            hero:{
                head:"वर्थ पिंक साल्ट",
                desc:"हिमालयन पिंक साल्ट एक प्रकार का रॉक साल्ट है जो पाकिस्तान के पंजाब क्षेत्र में खेवराज साल्ट माइन से निकाला जाता है। यह अपने विशिष्ट गुलाबी रंग के लिए जाना जाता है और अक्सर रसोई और बाथरूम में सजावटी वस्तु के रूप में उपयोग किया जाता है।",
                },
            consultation: "मुफ्त परामर्श",
            time: "सोमवार से शुक्रवार: 09:00 बजे से 10:00 बजे तक",
            email: "ईमेल: info@worthpinkSalt.com",
            social: "हमारे सामाजिक पृष्ठों पर जाएं:",
            home: "होम",
            about: "हमारे बारे में",
            services: "सेवाएं",
            contact: "संपर्क",
            getStarted: "शुरू करें"
          }
        },
        ar: {
          translation: {
            consultation: "استشارة مجانية",
            time: "الإثنين-الجمعة: ٠٩:٠٠ صباحًا - ١٠:٠٠ مساءً",
            email: "البريد الإلكتروني: info@worthpinkSalt.com",
            social: "قم بزيارة صفحاتنا الاجتماعية:",
            home: "الرئيسية",
            about: "عن الشركة",
            services: "خدماتنا",
            contact: "اتصل بنا",
            getStarted: "ابدأ الآن"
          }
        },
        ur: {
          translation: {
            consultation: "مفت استشاری",
            time: "پیر تا جمعہ: صبح 09:00 بجے - رات 10:00 بجے",
            email: "ای میل: info@worthpinkSalt.com",
            social: "ہماری سوشل ویب سائٹس پر جائیں:",
            home: "ہوم",
            about: "ہمارے بارے میں",
            services: "خدمات",
            contact: "رابطہ",
            getStarted: "شروع کریں"
          }
        }
      }
}

if (!i18next.isInitialized) {
    i18next
        .use(LanguageDetector)
        .use(initReactI18next)
        .init(i18nConfig)
}

export default i18next