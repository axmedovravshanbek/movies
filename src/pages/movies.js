import React, {useEffect, useRef, useState} from 'react'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {layoutGrid} from "../data";
import PageAnimation from "../components/pageAnimation";
import {connect} from "react-redux";

const Movies = ({content, setMouseClass}) => {
    const [outEffect, setOutEffect] = useState(true);
    const [selected, setSelected] = useState(null);
    const [conWidth, setConWidth] = useState(1000);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setConWidth(con?.current?.offsetWidth);
        });
        setConWidth(con?.current?.offsetWidth);
    }, []);
    const con = useRef(null);
    const scroll = useRef(null);
    return (
        <PageAnimation outEffect={outEffect}>
            <div>
                <div className="position-fixed top-0 w-100">
                    <div className="container">
                        <div className="row lines-row">
                            <div className="col-3 col-lg-2 bx1 h-100"/>
                            <div className="col-3 col-lg-2 br1 h-100"/>
                            <div className="col-3 col-lg-2 br1 h-100"/>
                            <div className="col-3 col-lg-2 br1 h-100"/>
                            <div className="col-2 d-lg-block d-none br1 h-100"/>
                            <div className="col-2 d-lg-block d-none br1 h-100"/>
                        </div>
                    </div>
                </div>
                <div ref={scroll} className="over-y-auto">
                    <div ref={con} className="container">
                        <div className="row my-3">
                            <div className="bg-white offset-3 offset-lg-4 col-6 col-lg-4 bg-white py-4 by1 br1 my-5">
                                <h1 className='text-center'>Movies</h1>
                             </div>
                        </div>
                        <div className="row position-static mb-5">
                            {content.filter((_, id) => id > 11).map((item, id) => (
                                <Link onClick={() => setOutEffect(false)} key={id} to={`/movie/${id + 12}`}
                                      className={`col-lg-${layoutGrid[id % 14]} col-12 h374`}>
                                    <motion.div onMouseEnter={()=>setMouseClass(true)}
                                                onMouseLeave={()=>setMouseClass(false)}
                                                key={id} onClick={() => setSelected(id)}
                                                className='floating-pics' style={{
                                        width: (conWidth > 720)
                                            ? (conWidth / 12 * layoutGrid[id] - 24)
                                            : (conWidth - 24),
                                        zIndex: selected === id ? 2 : 1,
                                        height: 350,
                                    }} initial={{opacity: 0}}
                                                animate={{opacity: 1, transition: {delay: 0.2 + id * 0.2}}}
                                                exit={(!outEffect && selected === id) ? {
                                                    width: '100vw',
                                                    height: '80vh',
                                                    left: 0,
                                                    top: scroll.current?.scrollTop,
                                                    transition: {duration: 1}
                                                } : null}>
                                        <div className='poster' style={{backgroundImage: `url("${item.coverImage}")`}}>
                                        <motion.div exit={{opacity: 0, transition: {duration: 0.5}}}
                                                    className="opacity-bg">
                                            <h4>{item.title}</h4>
                                        </motion.div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimation>
    )

};

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(Movies);
