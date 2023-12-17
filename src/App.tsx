import { useState } from 'react';
import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar /></div>
    );
}

export default App;
