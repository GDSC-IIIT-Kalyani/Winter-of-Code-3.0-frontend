import { Image } from "../../components/ui/Image";
import './welcomePage.css';

const starBg = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_back-ground.png?alt=media&token=74c6996e-550c-4160-ac62-d17b7c3ce943";
const cloudRight = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/cloud-right.png?alt=media&token=fd12c187-6e37-4d32-a623-7361bb83aee4";
const moonImg = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/moon.png?alt=media&token=e1ce274d-0efa-4bf9-a6c7-ee8e45d4c8d3";
const birdsRight = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0010_3-Birds.png?alt=media&token=655b0c70-5eac-40f0-9855-a2a68102c9bf";
const birdsLeft = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/WOC_Landing-page_01-Recovered.psd_0015_Color-Lookup-1.png?alt=media&token=766254c3-cf60-4525-8c4a-2da0c991a03e";
const icebergUpper = "https://firebasestorage.googleapis.com/v0/b/winter-of-code-3.appspot.com/o/iceberg_upper.png?alt=media&token=d2f89fe5-7e43-4c5e-88fc-08630b63156b";

const WelcomePage = () => {
    return (
        <div className="wrapper">
            <Image url={starBg}/>
            <img src={cloudRight} className="cloud-right" alt=""/>
            <img src={cloudRight} className="cloud-left" alt=""/>
            <img src={birdsRight} className="birds-right" alt=""/>
            <img src={birdsLeft} className="birds-left" alt=""/>
            <img src={moonImg} className="moon" alt=""/>
            <img src={icebergUpper} className="iceberg-upper" alt=""/>
            <h1 className="title" >Winter of Code</h1>
        </div>
    );
}

export default WelcomePage;