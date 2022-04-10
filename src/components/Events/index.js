import React from 'react';
import { EventsCard, EventsContainer, EventsH1, EventsH2, EventsPhoto, EventsWrapper } from './EventsElements';
import Photo1 from '../../assets/images/strawberry.jpg';
import Photo2 from '../../assets/images/bbq.jpg';
import Photo3 from '../../assets/images/tanabata.jpg';
import Photo4 from '../../assets/images/play_with_water.jpg';
import Photo5 from '../../assets/images/mikan.jpg';
import Photo6 from '../../assets/images/grapes.jpg';
import Photo7 from '../../assets/images/xmas.jpg';
import Photo8 from '../../assets/images/mochi.jpg';
import Photo9 from '../../assets/images/bowling.jpg';

const Events = () => {
    return (
        <EventsContainer>
            <EventsH1>季節の行事</EventsH1>
            <EventsWrapper>
                <EventsCard>
                    <EventsPhoto src={Photo1}/>
                    <EventsH2>いちご狩り</EventsH2>
                </EventsCard>
                <EventsCard>
                    <EventsPhoto src={Photo9}/>
                    <EventsH2>ボーリング</EventsH2>
                </EventsCard>
                <EventsCard>
                    <EventsPhoto src={Photo2}/>
                    <EventsH2>バーベキュー</EventsH2>
                </EventsCard>
                <EventsCard>
                    <EventsPhoto src={Photo3}/>
                    <EventsH2>七夕</EventsH2>
                </EventsCard>
                <EventsCard>
                    <EventsPhoto src={Photo4}/>
                    <EventsH2>水遊び</EventsH2>
                </EventsCard>
                <EventsCard>
                    <EventsPhoto src={Photo5}/>
                    <EventsH2>みかん狩り</EventsH2>
                </EventsCard>
                <EventsCard>
                    <EventsPhoto src={Photo6}/>
                    <EventsH2>ぶどう狩り</EventsH2>
                </EventsCard>
                <EventsCard>
                    <EventsPhoto src={Photo7}/>
                    <EventsH2>クリスマス</EventsH2>
                </EventsCard>
                <EventsCard>
                    <EventsPhoto src={Photo8}/>
                    <EventsH2>餅つき</EventsH2>
                </EventsCard>
            </EventsWrapper>
        </EventsContainer>
    )
}

export default Events
