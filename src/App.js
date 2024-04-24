import {useState} from "react";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {LeftMenu} from "./components/LeftMenu";
import {Footer} from "./components/Footer";


function App() {
    const pages = ['home', 'work', 'exp']
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
                onClose={onCloseMenu}
            />
            <Home />
            <Footer />

        </div>
    );
}

export default App;
