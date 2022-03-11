import React, {useEffect, useState} from 'react'

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState(getSize);
    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }
    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    });
    return windowSize
}
