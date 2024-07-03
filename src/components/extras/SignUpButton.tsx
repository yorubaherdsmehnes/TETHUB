import React from 'react';
import { motion } from 'framer-motion';

export interface buttonProps {
    className?: string;
    setOffCVisible?: any;
    setSignupVisible?: any;
    children?: any;
    onClick?: any;
}
const Button = {
    active: {
        scale: 0.9,
        boxShadow: '0 0 5px 0.5px #00000051',
    },
    hover: {
        scale: 1.1,
        boxShadow: '0 0 5px 0.5px #00000051',
    }
};

export const Mbutton = ({ className, setOffCVisible, setSignupVisible, children, onClick }: buttonProps) => {
    


    return (
        <div style={{ display: 'inline-block' }}>
            <motion.button
                variants={Button}
                whileHover= "hover"
                whileTap= "active"
                onClick={() => setSignupVisible(true)}
            >
                {children}
            </motion.button>
        </div>
    );
};
