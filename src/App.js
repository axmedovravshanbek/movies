import React, {useRef, useState} from "react";
import {Route, Routes, useLocation} from 'react-router-dom'
import useMouse from "@react-hook/mouse-position";
import {AnimatePresence} from "framer-motion";

import Jalousie from "./components/jalousie";
import MovingElement from "./pages/movingElement";
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
            <div className="mouse-holder" style={{
                transform: `translate(${mouse.pageX - 25}px, ${mouse.pageY - 25}px)`
            }}>
                <div className={`mouse ${mouseClass ? 'big' : ''}`}/>
            </div>
            <Jalousie setMouseClass={setMouseClass}/>
            <AnimatePresence exitBeforeEnter={true}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<MovingElement setMouseClass={setMouseClass}/>}/>
                    <Route exact path='movie'>
                        <Route path=':id' element={<ItemInfo setMouseClass={setMouseClass}/>}/>
                    </Route>
                    <Route path='movies' element={<Movies setMouseClass={setMouseClass}/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
