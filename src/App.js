import {useState} from "react";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {LeftMenu} from "./components/LeftMenu";
import {Footer} from "./components/Footer";
import {Work} from "./components/Work";
import {Projects} from "./components/Projects";
import './i18n';
import i18n from "i18next"; // Путь к файлу i18n.js



function App() {
    const pages = ['home', 'work', 'projects']
    const [currentPage, setCurrentPage] = useState('home');
    const [menuActive, setMenuActive] = useState(false);
    const [lang, setLang] = useState(i18n.language);

    const changeLanguage = (newLang) => {
        i18n.changeLanguage(newLang);
        setLang(newLang);
    };
    const toggleLanguage = (event) => {
        const newLang = event.target.checked ? 'en' : 'ru'; // Предполагаем, что переключаем между русским и английским
        changeLanguage(newLang);
    };
    const onOpenMenu = () => {
        setMenuActive(true);
    }
    const onCloseMenu = () => {
        setMenuActive(false);
    }

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    const getPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />
            case 'work':
                return <Work />
            case 'projects':
                return <Projects />
            default:
                return <Home />
        }
    }
    return (
        <div className="App">
            <Header
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pages={pages}
                toggleMenu={toggleMenu}
                lang={lang}
                setLang={setLang}
                changeLanguage={changeLanguage}
                toggleLanguage={toggleLanguage}
            />
            <LeftMenu
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pages={pages}
                active={menuActive}
                setMenuActive={setMenuActive}
                onClose={onCloseMenu}
                lang={lang}
                setLang={setLang}
                changeLanguage={changeLanguage}
                toggleLanguage={toggleLanguage}
            />
            {getPage()}
            <Footer />

        </div>
    );
}

export default App;
