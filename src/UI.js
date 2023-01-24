import React, { useState } from 'react';
import { Rnd } from "react-rnd";
import Creative1 from './Creative.js';
import Creative2 from './Creative2.js';
import UploadMenu from './UploadMenu.js';

const UI = () => {
    const [selectedOption, setSelectedOption] = useState(1);
    const [logoImg, setLogoImg] = useState('');
    const [bgImg, setBgImg] = useState('');
    const [ctaImg, setCtaImg] = useState('');
    const [copyImg, setCopyImg] = useState('');

    let Component;
    if (selectedOption === 1) {
        Component = <Creative1
            logoImg={logoImg}
            bgImg={bgImg}
            ctaImg={ctaImg}
            copyImg={copyImg}
            selectedOption={selectedOption}
        />
    } else if (selectedOption === 2) {
        Component = <Creative2
            logoImg={logoImg}
            bgImg={bgImg}
            ctaImg={ctaImg}
            copyImg={copyImg}
            selectedOption={selectedOption}
        />
    }

    return (
        <div>
            <Rnd className='styleWiever'
                default={{ x: 300, y: 300, width: 550, height: 400 }}
            >
                {Component}
            </Rnd>
            <UploadMenu setSelectedOption={setSelectedOption} setLogoImg={setLogoImg} setBgImg={setBgImg} setCtaImg={setCtaImg} setCopyImg={setCopyImg} />
        </div>
    );
}

export default UI;
