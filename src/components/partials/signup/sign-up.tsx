import classNames from 'classnames';
import styles from './sign-up.module.scss';
import { SubmitButton } from '../../extras/Button';


import { easeInOut, easeOut, motion } from 'framer-motion';

export interface SignUpProps {
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
        y: '-100vh',
        opacity: 0,
        ease: easeInOut,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 30,
            stiffness: 200,
            ease: easeInOut,
        },
    },
    exit: {
        y: '100vh',
        opacity: 0,
        transition: {
            type: 'spring',
            damping: 90,
            stiffness: 700,
        },
    },
};

export const SignUp = ({
    className,
    children,
    onClick,
    handleClose,
    visible,
    setVisible,
}: SignUpProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <motion.div
                onClick={() => setVisible(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className={styles.signup_backdrop}>
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <div className={styles.signup_modal}>
                            <div className={styles.heading}>
                                <h1>JOIN OUR COMMUNITY</h1>
                                <h3>Come see what we're all about</h3>
                            </div>
                            <div className={styles.inputs}>
                                <input
                                    type="text"
                                    className={styles.fName}
                                    placeholder="First Name"
                                    name="fName"
                                />
                                <input
                                    type="text"
                                    className={styles.lName}
                                    placeholder="Last Name"
                                    name="lName"
                                />
                            </div>
                            <div className={styles.inputs}>
                                <input
                                    type="email"
                                    className={styles.email}
                                    placeholder="Email"
                                    name="email"
                                />
                            </div>
                            <div className={styles.inputs}>
                                <SubmitButton className={styles.submitButton} type="submit">
                                    JOIN OUR NEWSLETTER!
                                </SubmitButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
