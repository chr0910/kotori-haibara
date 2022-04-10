import React from 'react';
import ProcessSection from './ProcessSection';
import { HeadWrap, ProcessHeadding, ProcessWrap } from './ProcessSection/ProcessElements';
import { processObjFive, processObjFour, processObjOne, processObjThree, processObjTwo } from './ProcessSection/Data';

const Process = () => {
    return (
        <ProcessWrap id="process">
            <HeadWrap>
                <ProcessHeadding></ProcessHeadding>
            </HeadWrap>
            <ProcessSection {...processObjOne} />
            <ProcessSection {...processObjTwo} />
            <ProcessSection {...processObjThree} />
            <ProcessSection {...processObjFour} />
            <ProcessSection {...processObjFive} />
        </ProcessWrap>
    )
}

export default Process;
