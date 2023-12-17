import { useState } from 'react';
import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';



function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar className={styles.navbar} />
            <Home className={styles.hero} />
            <Footer />
        </div>
    );
}

export default App;
