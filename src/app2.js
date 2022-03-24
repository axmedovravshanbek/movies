import React, {useRef, useState} from "react";
import {Link, Route, Routes, useLocation} from 'react-router-dom'
import useMouse from "@react-hook/mouse-position";
import {AnimatePresence, motion} from "framer-motion";
import ItemInfo from "./pages/itemInfo";
import Movies from "./pages/movies";

import "./App.scss";

function App() {
    const location = useLocation();
    const [mouseClass, setMouseClass] = useState(false);
    const doc = useRef(null);
    const mouse = useMouse(doc);
    return (
        <div className="doc-size" ref={doc} style={{height: window.innerHeight}}>
            <AnimatePresence exitBeforeEnter={true}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={
                        <motion.div exit={{opacity:0, x:500}}>
                            <h1>sdkncjodscnsjdcndojcnso</h1>
                            <Link to='/movie'>
                                <h2>page 2</h2>
                            </Link>
                        </motion.div>
                    }/>
                    <Route exact path='movie' element={
                        <motion.div>
                            <h1>second page</h1>
                            <Link to='/'>
                                <h2>page 1</h2>
                            </Link>
                        </motion.div>
                    }/>
                    <Route path='movies' element={<Movies setMouseClass={setMouseClass}/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
