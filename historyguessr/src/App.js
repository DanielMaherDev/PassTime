import React, {
    useState,
    useEffect
} from 'react';
import MainContainer from './components/MainContainer';
import SplashScreen from './components/SplashScreen';
import MainMenu from './components/MainMenu';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [gameMode, setGameMode] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setShowMenu(true);
        }, 3000); // Display splash screen for 3 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleSelectGameMode = (mode) => {
        setShowMenu(false);
        setGameMode(mode);
    };

    return ( <
        div className = "App" > {
            loading && < SplashScreen / >
        } {
            !loading && showMenu && < MainMenu onSelectGameMode = {
                handleSelectGameMode
            }
            />} {
                !loading && !showMenu && gameMode === 'irish' && < MainContainer / >
            } <
            /div>
        );
    }

    export default App;