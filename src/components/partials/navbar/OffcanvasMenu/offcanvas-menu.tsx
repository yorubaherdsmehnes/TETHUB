import classNames from 'classnames';
import styles from './offcanvas-menu.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// @coreui offcanvas components
import {
    COffcanvas,
    COffcanvasTitle,
    COffcanvasHeader,
    COffcanvasBody,
    CCloseButton,
} from '@coreui/react';

export interface OffcanvasMenuProps {
    className?: string;
    children?: any;
    onClick?: any;
    visible?: boolean;
    setVisible?: any;
    handleClose?: any;
    text?: string;
}

const dropIn = {
    hidden: {
        x: '200vw',
        opacity: 0,
    },
    visible: {
        
        x: '19.3vw',
        opacity: 1,
        transition: {
            type: "spring",
            damping: 30,
            stiffness: 200,
        },
    },
    exit: {
        x: '200vw',
        opacity: 0,
    },
};

export const OffcanvasMenu = ({
    className,
    children,
    onClick,
    handleClose,
    visible,
    setVisible
}: OffcanvasMenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <motion.div
                onClick={() => setVisible(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div 
                className={styles.offcanvas_backdrop}>

                </div>
                <div className={styles.offcanvas} onClick={handleClose}>
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className={styles.offcanvas_modal}
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Offcanvas Header */}

                        <div className={styles.header}>
                            <COffcanvasTitle className={styles.title}>
                                <div className={styles.tetHub_div}>
                                    <strong>TET</strong>HUB
                                </div>
                            </COffcanvasTitle>

                            {/* Close button */}

                            <div className={styles.close_button}>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={styles.toggle_btn}
                                    onClick={() => setVisible(false)}
                                ></motion.button>
                            </div>

                            {/* Close button */}
                        </div>

                        <div className={styles.body}>
                            <div className={styles.nav_button_links}>
                                <Link to="/">
                                    <button className={styles.navbar_buttons}>Home</button>
                                </Link>
                                <hr />
                                <Link to="/event">
                                    <button className={styles.navbar_buttons}>Events</button>
                                </Link>
                                <hr />
                                <Link to="/about">
                                    <button className={styles.navbar_buttons}>About</button>
                                </Link>
                                <hr />
                                <Link to="/blog">
                                    <button className={styles.navbar_buttons}>Blog</button>
                                </Link>
                                <hr />
                                <Link to="contact">
                                    <button className={styles.navbar_buttons}>Contact</button>
                                </Link>
                                <hr />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
