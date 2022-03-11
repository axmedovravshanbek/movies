import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Links = ({children, delay, setIsOpen}) => {
    return (
        <div onClick={()=>setIsOpen(false)} style={{overflowY: 'hidden', width: 'max-content'}}>
            <motion.div animate={{
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: 0.7 + delay,
                    ease: 'easeInOut'
                }
            }} initial={{y: 100}} exit={{
                y: -100,
                transition: {duration: 0.5, delay: delay}
            }}>
                {children}
            </motion.div>
        </div>
    );
};

export default Links;
