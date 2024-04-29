import {useState} from "react";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {LeftMenu} from "./components/LeftMenu";
import {Footer} from "./components/Footer";
import {Work} from "./components/Work";
import {Projects} from "./components/Projects";


function App() {
    const pages = ['home', 'work', 'projects']
    const [currentPage, setCurrentPage] = useState('home');
    const [menuActive, setMenuActive] = useState(false);
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
            />
            <LeftMenu
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pages={pages}
                active={menuActive}
                setMenuActive={setMenuActive}
                onClose={onCloseMenu}
            />
            {getPage()}
            <Footer />

        </div>
    );
}

export default App;
