import './welcomePage.css';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

const starBg = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_back-ground.png?alt=media&token=74c6996e-550c-4160-ac62-d17b7c3ce943";
const cloudRight = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/cloud-right.png?alt=media&token=fd12c187-6e37-4d32-a623-7361bb83aee4";
const moonImg = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/moon.png?alt=media&token=e1ce274d-0efa-4bf9-a6c7-ee8e45d4c8d3";
const birdsRight = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0010_3-Birds.png?alt=media&token=655b0c70-5eac-40f0-9855-a2a68102c9bf";
const birdsLeft = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0015_Color-Lookup-1.png?alt=media&token=766254c3-cf60-4525-8c4a-2da0c991a03e";
const iceberg = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/iceberg-total.png?alt=media&token=73ebff01-83d5-43dd-894a-f9e7e25471a7";
const upperIceberg = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/iceberg_upper.png?alt=media&token=d2f89fe5-7e43-4c5e-88fc-08630b63156b";
const wave = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/wave.png?alt=media&token=c6fdd09a-77cd-49d4-aa07-88925498349e";

const WelcomePage = () => {

    const [width, setWidth] = useState(window.screen.width);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [pos, setPos] = useState(0);
    
    const moonRef = useRef(null);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    }

    const handleResize = (event) => {
        setWidth(event.target.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);
    
    return (
        <>
        <div className="wrapper">
        {/* <div style={{position: 'absolute', left: '10%', top: '1%', zIndex: '1100'}}>
            {width}
        </div> */}
            <img src={moonImg} className='moon' ref={moonRef} style={{
                transform: `translateY(-${scrollPosition/40}%)`
            }} alt=""/>

            <img src={cloudRight} className='cloud-right' style={{
                transform: `translateY(-${scrollPosition/37}%)`
            }} alt=""/>

            <img src={cloudRight} className='cloud-left' style={{
                transform: `translateY(-${scrollPosition/37}%)`
            }} alt=""/>

            <div className='title'>
                Winter Of Code
            </div>
            
        </div>
        <div className='wrapper-2'>
            <img src={iceberg} className='iceberg' style={{
                transform: `translate(0, -${scrollPosition/30 + (width < 821 ? 0 : 0)}%)`
            }} alt=""/>
            <img src={wave} className='wave' style={{
                transform: `translate(0, -${scrollPosition/23 + (width < 821 ? 0 : 0)}%)`
            }} alt=""/>
        </div>
        </>
    );
}

export default WelcomePage;