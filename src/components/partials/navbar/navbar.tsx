import classNames from 'classnames';
import styles from './navbar.module.scss';

// Importing Images
import Logo from '../../../assets/TET_images/TET_HUB.svg';

// Impoting the offcanvas utton
import { OffCbutton } from '../../extras/Button';

// Importing the stylized buttons
import { Mbutton } from '../../extras/Button';

// Importing the sign up button
import { SignUpButton } from '../../extras/Button';

import { Link } from 'react-router-dom';

export interface NavbarProps {
    className?: string;
    setOffCVisible?: any;
    setSignupVisible?: any;
}

export const Navbar = ({ className, setOffCVisible, setSignupVisible }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {/* Navbar itself */}

            <nav className={styles.navbar}>
                {/* TetHub Logo */}
                <div className={styles.logo_div}>
                    <a href="http://">
                        <img src={Logo} alt="" className={styles.logo} />
                    </a>
                </div>
                {/* TetHub Logo */}

                <div className={styles['inline-block']}>
                    <div className={styles['left-align']}>
                        {/* Link Buttons */}

                        <div className={styles.nav_button_links}>
                            <Link to="/">
                                <Mbutton className={styles.navbar_buttons}>Home</Mbutton>
                            </Link>
                            <Link to="/about">
                                <Mbutton className={styles.navbar_buttons}>About</Mbutton>
                            </Link>
                            <Link to="/event">
                                <Mbutton className={styles.navbar_buttons}>Events</Mbutton>
                            </Link>
                            <Link to="/blog">
                                <Mbutton className={styles.navbar_buttons}>Blog</Mbutton>
                            </Link>
                            <Link to="/contact">
                                <Mbutton className={styles.navbar_buttons}>Contact</Mbutton>
                            </Link>
                        </div>

                        {/* Link Buttons */}

                        {/* Call To Action */}
                        <div className={styles.nav_bar_CTA}>
                            <SignUpButton
                                onClick={onclick}
                                setSignupVisible={setSignupVisible}
                                className="SignUp"
                            >
                                JOIN NOW
                            </SignUpButton>
                        </div>
                        {/* Call To Action */}

                        {/* Offcanvas Toggle Button */}
                        <div className={styles.toggle_btn}>
                            <OffCbutton
                                onClick={onclick}
                                setOffCVisible={setOffCVisible}
                                className="OffCanvas"
                            ></OffCbutton>
                        </div>
                        {/* Offcanvas Toggle Button */}
                    </div>
                </div>
            </nav>

            {/* Navbar itself */}
        </div>
    );
};
