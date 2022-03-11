import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";
import SVGComponent from "./svgComponent";
import Links from "./links";
import SVGLogo from "./svgLogo";

const Jalousie = ({setMouseClass}) => {
    const menu = [
        {link: '/', name: 'Home'},
        {link: '/movies', name: 'Movies'},
    ];
    const jalousieElementVariants = {
        hidden: {
            y: '-100%',
        },
        visible: i => ({
            y: '0',
            transition: {
                duration: 0.5,
                delay: i * 0.1,
                ease: 'easeInOut',
            },
        }),
        exit: i => ({
            y: '-100%',
            transition: {
                duration: 0.5,
                delay: 1.1 + i * 0.1,
                ease: 'easeInOut',
            },
        })
    };
    const colors = ['#10CB56', '#FFF000', '#FCA300',
        '#F860AB', '#068AE7'];
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count + 1)
    }, [isOpen]);
    return (
        <div className='jalousie'>
            <div className='j-initial'>
                <div className='container position-relative'>
                    <Link onMouseEnter={()=>setMouseClass(true)}
                          onMouseLeave={()=>setMouseClass(false)}
                          onClick={() => setIsOpen(false)} to='/'>
                     <SVGLogo/>
                    </Link>
                    <div onMouseEnter={()=>setMouseClass(true)}
                         onMouseLeave={()=>setMouseClass(false)}
                         className='menu-h'
                         onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className='menu-line' style={{transform: `rotate(${isOpen ? 45 : 0}deg) translate(${isOpen?'4px, 4px':'0, 0'})`}}/>
                        <div className='menu-line menu-line2' style={{transform: `rotate(${isOpen ? -45 : 0}deg) translate(${isOpen?'4px, -4px':'0, 0'})`}}/>
                    </div>
                </div>
            </div>
            <div className="j-blocks">
                <AnimatePresence initial={false} exitBeforeEnter={true}>
                    {isOpen && [...Array(5).keys()].map((id) => (
                        <motion.div className='j-block ' initial='hidden' animate='visible' exit='exit' key={id}
                                    variants={jalousieElementVariants} custom={id}
                                    style={{zIndex: 30, left: `${id * 20}vw`, background: colors[count % 5]}}/>
                    ))
                    }
                </AnimatePresence>
            </div>
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                {isOpen && <div className="j-content">
                    <motion.div animate={{opacity: 1, transition: {delay: 1}}} initial={{opacity: 0}}
                                exit={{opacity: 0, transition: {delay: 0.3, ease: 'easeOut'}}}
                                className="container h-100">
                        <div className="d-flex h-100 flex-column">
                            <div className="row flex-lg-grow-0 flex-grow-1">
                                <div className="col-6 offset-lg-2 bx1 pt-5"/>
                                <div className="col-6 col-lg-2 br1"/>
                            </div>
                            <div className="row order-2 order-lg-1">
                                <div className="col-6 offset-lg-2 bx1"/>
                                <div className="col-6 col-lg-2 by1 br1">
                                    <div onMouseEnter={()=>setMouseClass(true)}
                                         onMouseLeave={()=>setMouseClass(false)}
                                         className="py-5 px-md-0">
                                        <SVGComponent/>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex-grow-1 order-1 order-lg-2">
                                <div className="col-6 offset-lg-2 by1 bx1">
                                    <div className="p-5" style={{overflowY: 'visible'}}>
                                        {menu.map((item, id) => (
                                            <Links key={item.link} setIsOpen={setIsOpen} delay={id * 0.1}>
                                                <Link to={item.link}>
                                                    <h2 onMouseEnter={()=>setMouseClass(true)}
                                                        onMouseLeave={()=>setMouseClass(false)}
                                                        className='j-links'>{item.name}</h2>
                                                </Link>
                                            </Links>
                                        ))}
                                        <Links setIsOpen={setIsOpen} delay={0.2}>
                                            <a target='_blank' href="https://t.me/axmedovravshanbek">
                                                <h2 onMouseEnter={()=>setMouseClass(true)}
                                                    onMouseLeave={()=>setMouseClass(false)}
                                                    className='j-links'>Telegram</h2>
                                            </a>
                                        </Links>
                                        <Links setIsOpen={setIsOpen} delay={0.3}>
                                            <a target='_blank' href="https://instagram.com/r.r.axmedov">
                                                <h2 onMouseEnter={()=>setMouseClass(true)}
                                                    onMouseLeave={()=>setMouseClass(false)}
                                                    className='j-links'>Instagram</h2>
                                            </a>
                                        </Links>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2 br1"/>
                            </div>
                            <div className="row order-4">
                                <div className="col-6 offset-lg-2 bx1 pt-5"/>
                                <div className="col-6 col-lg-2 br1"/>
                            </div>
                        </div>
                    </motion.div>
                </div>}
            </AnimatePresence>
        </div>
    );
};

export default Jalousie;
