'use client'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const RTL_LANGUAGES = ['ar', 'ur']

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
  resources: {
    en: {
      translation: {
        hero: {
          head: "Worth Pink Salt",
          desc: "Pink Himalayan Salt is a type of rock salt that is mined from the KhewRaj salt mines in the Punjab region of Pakistan. It is known for its distinctive pink color and is often used as a decorative item in kitchens and bathrooms.",


        },
        about1: {
          head: "About Us",
          head1: "Top Quality Pink Salt Company",

          desc1: "Pak Pink Salt is renowned as a top quality pink salt company that started its operations back in 1986 intending to deliver value-added products to its customers. We don’t deliver only the Himalayan pink salt, we deliver the taste that everyone craves. That’s the reason why our Himalayan salt products are the first choice of every individual.",
          desc2: "We craft our products in such a way that it serves the best value to our customers worldwide. This quality aids us to become the ultimate best quality Himalayan pink salt producer in the world. Pak Pink Salt – Pakistan’s leading natural salt export company serves its customers with top-notch quality products all over the world, in particular, Japan, Korea, Australia, and Europe.",
          readMore: "Read More",


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
        hero: {
          head: "Worth Pink Salt",
          desc: "Le sel rose himalayen est un type de sel de roche qui est extrait des mines de sel de KhewRaj dans la région du Pendjab au Pakistan. Il est connu pour sa couleur rose distinctive et est souvent utilisé comme élément décoratif dans les cuisines et les salles de bains.",
        },
        about: {
          head: "À propos de nous",
          head1: "Société de sel rose de qualité supérieure",
          desc: "Pak Pink Salt est réputée comme une société de sel rose de qualité supérieure qui a commencé ses opérations en 1986 dans le but de fournir des produits à valeur ajoutée à ses clients. Nous ne livrons pas seulement le sel rose himalayen, nous livrons le goût que tout le monde désire. C'est la raison pour laquelle nos produits au sel rose himalayen sont le premier choix de chaque individu.",
          desc1: "Nous créons nos produits de telle sorte qu'il serve la meilleure valeur à nos clients dans le monde entier. Cette qualité nous aide à devenir le meilleur producteur de sel rose himalayen de qualité supérieure au monde. Pak Pink Salt – Société pakistanaise d'exportation de sel naturel leader sert ses clients avec des produits de qualité supérieure dans le monde entier, en particulier au Japon, en Corée, en Australie et en Europe.",
          readMore: "Lire la suite",
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
        hero: {
          head: "वर्थ पिंक साल्ट",
          desc: "हिमालयन पिंक साल्ट एक प्रकार का रॉक साल्ट है जो पाकिस्तान के पंजाब क्षेत्र में खेवराज साल्ट माइन से निकाला जाता है। यह अपने विशिष्ट गुलाबी रंग के लिए जाना जाता है और अक्सर रसोई और बाथरूम में सजावटी वस्तु के रूप में उपयोग किया जाता है।",
        },
        about: {
          head: "हमारे बारे में",
          head1: "शीर्ष गुणवत्ता वाला पिंक साल्ट कंपनी",
          desc: "पाक पिंक साल्ट एक शीर्ष गुणवत्ता वाला पिंक साल्ट कंपनी है जो 1986 में अपने ग्राहकों को मूल्य वर्धित उत्पाद प्रदान करने के इरादे से अपने संचालन शुरू की। हम केवल हिमालयन पिंक साल्ट नहीं देते हैं, हम वह स्वाद देते हैं जिसकी हर कोई इच्छा करता है। यही कारण है कि हमारे हिमालयन साल्ट उत्पाद हर व्यक्ति का पहला विकल्प हैं।",    desc1: "हम अपने उत्पादों को इस तरह से तैयार करते हैं कि यह दुनिया भर में हमारे ग्राहकों को सर्वोत्तम मूल्य प्रदान करता है। यह गुणवत्ता हमें दुनिया में सर्वोत्तम गुणवत्ता वाले हिमालयन पिंक साल्ट उत्पादक बनने में मदद करती है। पाक पिंक साल्ट - पाकिस्तान की प्रमुख प्राकृतिक नमक निर्यात कंपनी अपने ग्राहकों को दुनिया भर में उच्च गुणवत्ता वाले उत्पादों के साथ सेवा देती है, विशेष रूप से जापान, कोरिया, ऑस्ट्रेलिया और यूरोप में।",
          readMore: "और पढ़ें",

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
        hero: {
          head: "وورث بيك سلت",
          desc: "هو نوع من أنواع الملدات الصخرية التي يتم استخراج ها من مجمع الملدات الصخرية في خيوراج في منطقة البنجاب في باكستان. يُعرف بونه لونه الفuchsia المميّز، وغالبًا ما يُستخدم كعنصر زخرفي في المطابخ والحمامات.",

        },
        about: {
          head: "معلومات عنا",
          head1: "شركة الملح الوردي الأفضل جودة",
          desc: "باك بينك سولت هي شركة ملح وردي مرموقة بدأت عملياتها في عام 1986 بهدف تقديم منتجات ذات قيمة مضافة لعملائها. نحن لا نقدم ملح الهيمالايا الوردي فقط، بل نقدم المذاق الذي يتوق إليه الجميع. هذا هو السبب في أن منتجات الملح لدينا هي الخيار الأول لكل فرد.",
          desc1: "نصنع منتجاتنا بطريقة تقدم أفضل قيمة لعملائنا في جميع أنحاء العالم. تساعدنا هذه الجودة في أن نصبح أفضل منتج لملح الهيمالايا الوردي في العالم. باك بينك سولت - شركة تصدير الملح الطبيعي الرائدة في باكستان تخدم عملائها بمنتجات عالية الجودة في جميع أنحاء العالم، وخاصة في اليابان وكوريا وأستراليا وأوروبا.",
          readMore: "اقرأ المزيد"
        },
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
    },
    de: {
      translation: {
        hero: {
          head: "Worth Pink Salt",
          desc: "Himalaya-Rosa-Salz ist eine Art Steinsalz, das in den KhewRaj-Salzbergwerken in der Region Punjab in Pakistan abgebaut wird. Es ist bekannt für seine charakteristische rosa Farbe und wird häufig als Dekoelement in Küchen und Badezimmern verwendet."
        },
        about: {
          head: "Über uns",
          head1: "Erstklassiges Pink Salt Unternehmen",
          desc: "Pak Pink Salt ist bekannt als erstklassiges Salz-Unternehmen, das 1986 seinen Betrieb aufnahm.",
          desc1: "Wir gestalten unsere Produkte so, dass sie unseren Kunden weltweit den besten Wert bieten.",
          readMore: "Weiterlesen"
        },
        consultation: "Kostenlose Beratung",
        time: "Mo-Fr: 09:00 - 22:00 Uhr",
        email: "E-Mail: info@worthpinkSalt.com",
        social: "Besuchen Sie unsere sozialen Seiten:",
        home: "Startseite",
        about: "Über uns",
        services: "Dienstleistungen",
        contact: "Kontakt",
        getStarted: "Loslegen"
      }
    },
    it: {
      translation: {
        hero: {
          head: "Worth Pink Salt",
          desc: "Il sale rosa dell'Himalaya è un tipo di salgemma estratto dalle miniere di sale di KhewRaj nella regione del Punjab in Pakistan. È noto per il suo caratteristico colore rosa ed è spesso utilizzato come elemento decorativo in cucine e bagni."
        },
        about: {
          head: "Chi Siamo",
          head1: "Azienda di Sale Rosa di Alta Qualità",
          desc: "Pak Pink Salt è rinomata come azienda di sale rosa di alta qualità che ha iniziato le sue operazioni nel 1986.",
          desc1: "Realizziamo i nostri prodotti in modo che offrano il miglior valore ai nostri clienti in tutto il mondo.",
          readMore: "Leggi di più"
        },
        consultation: "Consulenza Gratuita",
        time: "Lun-Ven: 09:00 - 22:00",
        email: "Email: info@worthpinkSalt.com",
        social: "Visita le nostre pagine social:",
        home: "Home",
        about: "Chi Siamo",
        services: "Servizi",
        contact: "Contatti",
        getStarted: "Inizia Ora"
      }
    },
    da: {
      translation: {
        hero: {
          head: "Worth Pink Salt",
          desc: "Himalaya-pink-salt er en type stensalt, der udvindes fra KhewRaj-saltminerne i Punjab-regionen i Pakistan. Det er kendt for sin karakteristiske pink farve og bruges ofte som dekorativt element i køkkener og badeværelser."
        },
        about: {
          head: "Om Os",
          head1: "Topkvalitets Pink Salt Virksomhed",
          desc: "Pak Pink Salt er kendt som en topkvalitets saltvirksom hed, der startede sin drift tilbage i 1986.",
          desc1: "Vi fremstiller vores produkter på en måde, der giver den bedste værdi til vores kunder verden over.",
          readMore: "Læs Mere"
        },
        consultation: "Gratis Konsultation",
        time: "Man-Fre: 09:00 - 22:00",
        email: "Email: info@worthpinkSalt.com",
        social: "Besøg vores sociale sider:",
        home: "Hjem",
        about: "Om Os",
        services: "Tjenester",
        contact: "Kontakt",
        getStarted: "Kom I Gang"
      }
    }
  }
})

if (!i18next.isInitialized) {
  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(i18nConfig)
}

export default i18next
