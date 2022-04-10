import React from 'react';
import { GarellyCard, GarellyContainer, GarellyH1, GarellyH2, GarellyPhoto, GarellyWrapper } from './GarellyElements';
import Photo1 from '../../assets/images/house.jpg';
import Photo2 from '../../assets/images/entrance.jpg';
import Photo3 from '../../assets/images/inside3.jpg';
import Photo4 from '../../assets/images/inside2.jpg';

const Garelly = () => {
    return (
        <GarellyContainer id="Garelly">
            <GarellyH1>施設の様子</GarellyH1>
            <GarellyWrapper>
                <GarellyCard>
                    <GarellyPhoto src={Photo2}/>
                    <GarellyH2>手作りのことりちゃんが目印です。</GarellyH2>
                </GarellyCard>
                <GarellyCard>
                    <GarellyPhoto src={Photo1}/>
                    <GarellyH2>外観</GarellyH2>
                </GarellyCard>
                <GarellyCard>
                    <GarellyPhoto src={Photo3}/>
                    <GarellyH2>教室１</GarellyH2>
                </GarellyCard>
                <GarellyCard>
                    <GarellyPhoto src={Photo4}/>
                    <GarellyH2>教室２</GarellyH2>
                </GarellyCard>
            </GarellyWrapper>
        </GarellyContainer>
    )
}

export default Garelly
