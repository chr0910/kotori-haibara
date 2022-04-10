import React from 'react';
import ReactTooltip from "react-tooltip";
import map from '../../assets/images/map2.png';
import { AccessContainer, AccessMap, AccessHeadding, AccessH1, AccessText, AccessTextWrap, AccessLink } from './AccessElements';

const Access = () => {
    return (
        <AccessContainer id="access">
            <AccessHeadding>
                <AccessH1 />
            </AccessHeadding>
            <AccessLink to={{ pathname: "https://www.google.co.jp/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92633-0206+%E5%A5%88%E8%89%AF%E7%9C%8C%E5%AE%87%E9%99%80%E5%B8%82%E6%A6%9B%E5%8E%9F%E5%A4%A9%E6%BA%80%E5%8F%B0%E8%A5%BF%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%90%E2%88%92%EF%BC%99/@34.5410992,135.9643084,17z/data=!3m1!4b1!4m5!3m4!1s0x6006b4899b1ab5e3:0x6109a979a9287376!8m2!3d34.5410948!4d135.9664971?hl=ja" }} target="_blank">
                <a data-tip
                data-for="adress"
                data-iscapture="true">
                    <AccessMap src={map} alt="map" />
                </a>
            </AccessLink>
            <ReactTooltip id="adress" place="top" type="error" effect="float">
                <h2>〒633-0206 奈良県宇陀市天満台西一丁目20-9</h2>
                <h3>クリックするとgoogle mapsのページへ移動します。</h3>
            </ReactTooltip>
            <AccessTextWrap>
                <AccessText>平日　15:00～18:00</AccessText>
                <AccessText>土曜　14:00～18:00</AccessText>
                <AccessText>* 水曜、日曜、祝日はお休みです。</AccessText>
            </AccessTextWrap>
        </AccessContainer>
    )
}

export default Access
