import {connect} from "react-redux";
import React, {useRef, useEffect, useState} from 'react'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {layout} from "../data";
import useMouse from '@react-hook/mouse-position'
import PageAnimation from "../components/pageAnimation";
import {useWindowSize} from "../components/useWindowSize";

const MovingElement = ({content, mouseClass, setMouseClass}) => {
    const [innerOffset, setInnerOffset] = useState([200, 200]);
    const [innerStyle, setInnerStyle] = useState({});
    const [selected, setSelected] = useState(null);

    const wSize = useWindowSize();

    const outer = useRef(null);
    const inner = useRef(null);
    const mouse = useMouse(outer);
    const mouse2 = useMouse(inner);

    useEffect(() => {
        if (selected === null && wSize.width > 992) {
            setInnerOffset([
                (mouse.pageX / mouse.elementWidth * (mouse2.elementWidth - mouse.elementWidth)),
                (mouse.pageY / mouse.elementHeight * (mouse2.elementHeight - mouse.elementHeight))
            ]);
            setInnerStyle({transform: `translate(-${innerOffset[0]}px, -${innerOffset[1]}px)`});
        }
    }, [mouse.pageX, mouse.pageY]);
    useEffect(() => {
        setInnerStyle({transform: `translate(-0px, -0px)`});
    }, [wSize]);
    return (
        <PageAnimation outEffect={selected === null}>
            <div className='mouse-outer' ref={outer}>
                <Link to='movies'>
                    <motion.div onMouseEnter={() => setMouseClass(true)} onMouseLeave={() => setMouseClass(false)}
                                initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}}
                                exit={{opacity: 0, transition: {duration: 0.4}}} className="show-more">
                        <h4>Show more</h4>
                        <img src="./arrow.svg" alt=""/>
                    </motion.div>
                </Link>
                <div style={innerStyle} className='mouse-inner' ref={inner}>
                    {content.filter((_, id) => id < 12).map((item, id) => (
                        <Link className='sk' key={id} to={`/movie/${id}`}>
                            <motion.div onMouseEnter={() => setMouseClass(true)}
                                        onMouseLeave={() => setMouseClass(false)} key={id}
                                        onClick={() => setSelected(id)} className='floating-pics' style={{
                                top: layout[id].top * (wSize.width > 992 ? 1 : 0.66),
                                left: layout[id].left * (wSize.width > 992 ? 1 : 0.66),
                                zIndex: selected === id ? 2 : 1,
                            }} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: id * 0.2}}}
                                        exit={(selected === id) ? {
                                            top: wSize.width > 992
                                                ? innerOffset[1]
                                                : outer.current?.scrollTop + 90,
                                            left: wSize.width > 992
                                                ? innerOffset[0]
                                                : outer.current?.scrollLeft + 94,
                                            width: '100vw',
                                            height: '80vh',
                                            transition: {duration: 1}
                                        } : null}>
                                <div className='poster' style={{backgroundImage: `url("${item.coverImage}")`}}>
                                <motion.div exit={{opacity: 0, transition: {duration: 0.5}}}
                                            className="opacity-bg">
                                <div className='width-min'>{item.title}</div>
                                </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </PageAnimation>
    )
};

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(MovingElement);
