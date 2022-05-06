import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Dermawan_Silaen_CV.pdf';

import { themeContext } from '../../Context';
import { useContext } from 'react';

const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>

                <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                {/*first card*/}

                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </div>

                {/* second card */}
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML, CSS, JavaScript, React"}
                    />
                </div>

                {/*3rd card*/}
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Lorem ispum dummy text are ussually use in section where we need some random text"}
                    />
                </div>

                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

            </div>
        </div>
    )
}

export default Services
