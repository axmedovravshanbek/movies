import React from 'react';
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {connect} from "react-redux";
import PageAnimation from "../components/pageAnimation";

const ItemInfo = ({content, setMouseClass}) => {
    let params = useParams();
    return (
        <PageAnimation inEffect={false}>
            <div className='over-y-auto'>
                <div className='d-flex justify-content-center align-items-center'
                     style={{height: '80vh', width: '100vw', zIndex: 5}}>
                    <div className='head-image' style={{
                        width: '100vw',
                        height: '80vh',
                        backgroundImage: `url("${content[params.id]?.coverImage}")`
                    }}/>
                </div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}}
                            className="container">
                    <div className="row m-0">
                        <div className="col-12 bx1 bb1 pt-4 pb-lg-5"/>
                        <div className="col-12 bb1 p-4 p-lg-5 bx1 col-lg-6">
                            <h3>{content[params.id]?.title}</h3>
                        </div>
                        <div className="d-none d-lg-block br1 bb1 col-lg-6"/>
                        <div className="d-none d-lg-block bl1 col-2"/>
                        <div className="col-lg-8 col-12 p-4 p-lg-5 bx1">
                            <h4>{content[params.id]?.text1}</h4>
                        </div>
                        <div className="d-none d-lg-block br1 col-2"/>
                        <div className="col-6 bx1 bt1 p-4">
                            <h4 className="fw-bold">Director:</h4>
                            <h4>{content[params.id]?.text2}</h4>
                        </div>
                        <div className="col-6 br1 bt1 p-4">
                            <h4 className="fw-bold">Released year:</h4>
                            <h4>{content[params.id]?.text3}</h4>
                        </div>
                    </div>
                </motion.div>
                <div className="by1">
                    <div className="container">
                        <h3 className='pt-4'>Cast :</h3>
                    </div>
                    <div className="pt-4 pb-5 over-x-auto">
                        <div className="row roller">
                            {content[params.id]?.actors?.map((item, index) => (
                                <div onMouseEnter={() => setMouseClass(true)} onMouseLeave={() => setMouseClass(false)}
                                     key={index} className='cast p-0 mx-3'>
                                    <div className='poster' style={{backgroundImage: `url("${item.image}")`}}>
                                        <div className="opacity-bg">{item.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row m-0">
                        <div className="col-12 bx1 py-5"/>
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};


function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(ItemInfo);
