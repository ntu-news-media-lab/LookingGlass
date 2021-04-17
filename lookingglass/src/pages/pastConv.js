import {useState } from "react";
import "../css/pastconv.css";
import "../css/news.css";
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'

// import convBubble from "../img/speech_bubble.png";
// import white_bg from "../img/white_bg.png"
import cn_lgogo from "../img/conv-logo.svg"

// import {IncludeGA} from "./topics"


export default function Pastconv(props) {

    if (props.past_convs) {
        const pastconv_result = props.past_convs;
        console.log(pastconv_result);
        return (
            <div className="pastConv_container">
                <div className="secTitle">
                    <div id="line"></div>
                    <h3>Related News</h3>
                    {/* <p>Hear From Others</p> */}
                </div>

                <div className="convBubble_container">
                    <ControlledCarousel pastconv_result={pastconv_result} />

                    <div className="tc-logo">
                        <img src={cn_lgogo} alt="the-conversation-logo" />
                    </div>
                </div>
            </div>
        );
    }
}


function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    console.log(props);
    const past_ind = props.pastconv_result.map((item, i) => {
        return (
            <Carousel.Item id={"past_item_" + i}>
                <a href={item['url']}>
                    <div className="bubble-imge-container" />
                    <div className="convTitle">PAST COVERAGE</div>
                    <Carousel.Caption>
                        <h3>{item['headline']}</h3>
                        <p id="past_summary">{item['summary']}</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>

        )
    })

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={99999}>
            {past_ind}
        </Carousel>
    );
}