import { useEffect, useState } from 'react';
import styles from './App.module.scss';

// Routing
import { MemoryRouter, Route, Routes, Link } from 'react-router-dom';

// Navabar component
import { Navbar } from './components/partials/navbar/navbar';

// Offcanvas
import { OffcanvasMenu } from './components/partials/navbar/OffcanvasMenu/offcanvas-menu';

// Sign up drop in
import { SignUp } from './components/partials/signup/sign-up';

// Page Components
import { Home } from './components/views/home/home';
import { About } from './components/views/about/about';
import { Event } from './components/views/event/event';
import { Blog } from './components/views/blog/blog';
import { Contact } from './components/views/contact/contact';

// Footer Component
import { Footer } from './components/partials/footer/footer';
import { anticipate } from 'framer-motion';

export interface AppProps {
    className?: string;
}

function App() {
    // UseState hook for Offcanvas toggling
    const [OCvisible, setOffCVisible] = useState(false);
    const [SUvisible, setSignUpVisible] = useState(false);

    // Functionality for Back to top Scrolling
    const scrollToNavbar = () => {
        const navbarElement = document.getElementById('scrollTo');

        if (navbarElement) {
            navbarElement.scrollIntoView({ behavior: 'smooth'});
        } else {
            alert('not found');
        }
    };

    return (
        <div className={styles.App} style={{ width: '100%' }}>

            {/* Rendered Page */}
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
            
            {/* Navbar */}
            <Navbar className={styles.navbar} setOffCVisible={setOffCVisible} setSignupVisible={setSignUpVisible} />

            {/* OffCanvas */}
            {OCvisible && <OffcanvasMenu visible={OCvisible} setVisible={setOffCVisible} />}

            
            {SUvisible && <SignUp visible={SUvisible} setVisible={setSignUpVisible} />}
            <div id="scrollTo"></div>


                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>


            {/* Footer */}
            <Footer scrollToNavbar={scrollToNavbar} setSignupVisible={setSignUpVisible}/>
            </MemoryRouter>

            <div />
        </div>
    );
}

export default App;
