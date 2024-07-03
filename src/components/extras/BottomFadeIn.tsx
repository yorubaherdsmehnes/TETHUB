import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export interface buttonProps {
    className?: string;
    children?: any;
}

export const LfadeIn = ({ children }: buttonProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });


    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }else{
            controls.start('hidden');
        }
    }, [controls, inView]);

    const BottomFadeIn = {
        hidden: {
            opacity: 0,
            y: "100%",
        },
        visible: {
            duration: 5,
            opacity: 1,
            y: "0",
            
        transition: {
            type: "fade",
            dampening: 10,
        },
        },
    };

    return (
            <motion.div ref={ref} variants={BottomFadeIn} initial="hidden" animate={controls}>
                    {children}
            </motion.div>
    );
};
