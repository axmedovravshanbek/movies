import React from 'react';
import {motion} from "framer-motion";

const PageAnimation = ({children, inEffect = true, outEffect = true}) => {
    const pageTransitionVariants = {
        initial: {
            y: inEffect ? '0' : '-100%',
        },
        animate: {
            y: inEffect ? '-100%' : '-100%',
        },
        exit: {
            y: outEffect ? '0' : '-100%',
        }
    };
    return (
        <React.Fragment>
            {[...Array(5).keys()].map((id) => (
                <motion.div transition={{
                    duration: 0.5,
                    delay: id * 0.1,
                    ease: 'easeInOut',
                }} className='j-block' initial='initial' animate='animate' exit='exit' key={id}
                            variants={pageTransitionVariants}
                            style={{zIndex: 2, left: `${id * 20}vw`, background: '#FCA300'}}/>
            ))}
            {children}
        </React.Fragment>
    );
};

export default PageAnimation;
