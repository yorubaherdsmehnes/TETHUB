import classNames from 'classnames';
import styles from './navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className="root_container">
            <div className="div_sizer">
                <div className={styles['navbar-default']}>
                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.logo_image} />
                    <div className={styles.navbar_middle}>
                        <div className={styles.navbar_middle_address}>
                            <span className={styles.brown_header_text}>WE BRING YOUR BUILDING DREAMS TO LIFE</span><em className={styles.brown_header_text}>johndoe24@gmail.com</em></div>
                        <hr className={styles.horizontal_divider} />
                        <div className={styles.navbar_middle_links}>
                            <button className={styles.navbar_link_buttons}>About Us</button>
                            <button className={styles.navbar_link_buttons}>Our Services</button>
                            <button className={styles.navbar_link_buttons}>Contact Us</button>
                        </div>
                    </div>
                    <button className={styles.brown_cta}>Get in Touch</button>
                </div>
            </div>
        </div></div>;
};
