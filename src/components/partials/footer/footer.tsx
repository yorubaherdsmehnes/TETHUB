import classNames from 'classnames';
import styles from './footer.module.scss';
import { useState } from 'react';
import { SignUpButton } from '../../extras/Button';

// Ouline SVGs
import { ReactComponent as Facebook } from '../../../assets/TET_images/facebook_logo.svg';
import { ReactComponent as LinkedIn } from '../../../assets/TET_images/linkedin_logo.svg';
import { ReactComponent as Quora } from '../../../assets/TET_images/quora_logo.svg';
import { ReactComponent as Whatsapp } from '../../../assets/TET_images/whatsapp_logo.svg';

// Instagram Images
import InstagramColor from '../../../assets/TET_images/instagram-logo.png';
import InstagramPlain from '../../../assets/TET_images/instagram_logo.png';

export interface FooterProps {
    className?: string;
    scrollToNavbar?: () => void;
    setSignupVisible?: any;
}

// Functionality for current date (for the copyright)
const currentYear = new Date().getFullYear();

export const Footer = ({ className, scrollToNavbar, setSignupVisible }: FooterProps) => {
    // Hover functionality to switch between the instagram images
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseHover = () => {
        setIsHovered(true);
    };
    const handleMouseNotHover = () => {
        setIsHovered(false);
    };
    const instagramImage = isHovered ? InstagramColor : InstagramPlain;

    return (
        <div className={classNames(styles.root, className)}>
            {/* Footer Itself */}

            <footer className={styles.footer}>
                <div className={styles.footer_top}>
                    {/* First container which is on the left of the page when the screen is bigger than a tablet */}

                    <div className={styles.footer_links}>
                        <div className={styles.tetHub_div}>
                            <strong>TET</strong>Hub
                        </div>
                        <h2 className={styles.footer_links_text}>HOME</h2>
                        <h2 className={styles.footer_links_text}>PROGRAMMES</h2>
                        <h2 className={styles.footer_links_text}>BLOG</h2>
                        <h2 className={styles.footer_links_text}>CONTACT</h2>
                    </div>

                    {/* First container which is on the left of the pages when the screen is bigger than a tablet */}

                    {/* Second containe which is on the right of the page when the screen is bigger than a tablet */}

                    <div className={styles.footer_inquiries}>
                        <h1 className={styles.footer_inquiries_header}>Inquiries</h1>
                        <h2 className={styles.footer_inquiries_text}>
                            Looking to join TET Hub Team?
                        </h2>
                        <SignUpButton
                            onClick={onclick}
                            setSignupVisible={setSignupVisible}
                            className="SignUp"
                        >
                            JOIN US!
                        </SignUpButton>
                        <h2>Become a partner</h2>
                    </div>

                    {/* Second containe which is on the right of the page when the screen is bigger than a tablet */}
                </div>
                <div className={styles.footer_contacts}>
                    {/* Social Media Icons */}

                    <div className={styles.social_icons_div}>
                        <div className={styles.social_icons} id={styles.facebook}>
                            <Facebook />
                            Facebook: TET Hub
                        </div>

                        {/* Instagram */}

                        <div
                            className={styles.social_icons}
                            id={styles.instagram}
                            onMouseEnter={handleMouseHover}
                            onMouseLeave={handleMouseNotHover}
                        >
                            {/* isHovered ? InstagramColor : InstagramPlain; */}
                            <img src={instagramImage} alt="" />
                            Instagram: @tethub_community
                        </div>

                        {/* Instagram */}

                        <div className={styles.social_icons} id={styles.linkedin}>
                            <LinkedIn />
                            LinkedIn: TET Hub
                        </div>
                        <div className={styles.social_icons} id={styles.quora}>
                            <Quora />
                            Quora: TET Hub Community
                        </div>
                        <div className={styles.social_icons} id={styles.whatsapp}>
                            <Whatsapp />
                            Whatsapp: TET Hub
                        </div>
                    </div>

                    {/* Social Media Icons */}

                    {/* COntainer at the very bottom of the page */}

                    <div className={styles.copyright_div}>
                        <hr />
                        {/* Copyrights */}

                        <div className={styles.copyright}>
                            <h2>© {currentYear} by TET Hub</h2>
                        </div>

                        {/* Copyrights */}

                        {/* Back to top function */}

                        <div className={styles.back_to_top} onClick={scrollToNavbar}>
                            <p>Back to Top </p>
                            <img src="src/assets/TET_images/back-up.png" alt="" />
                        </div>

                        {/* Back to top function */}

                        {/* COntainer at the very bottom of the page */}
                    </div>
                </div>
            </footer>

            {/* Footer Itself */}
        </div>
    );
};
