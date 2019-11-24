import React, { useState } from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';

const Details = () => {
    const [isFirstChecked, setFirstChecked] = useState(false);
    const toggle = () => setFirstChecked(c => !c);

    return (
        <DetailsLayout title="Radio switch">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="inline-flex br-pill bg-black-10 pa1">
                                <label className={`pointer pv3 ph2 br-pill ${isFirstChecked ? 'bg-blue white' : ''}`}>
                                    <input type="radio" className="dn" checked={isFirstChecked} onClick={toggle} />
                                    <div className={`w3 br1 ${isFirstChecked ? 'bg-white' : 'bg-black-20'}`} style={{ height: '8px' }}  />
                                </label>
                                <label className={`pointer pv3 ph2 br-pill ${isFirstChecked ? '' : 'bg-blue white'}`}>
                                    <input type="radio" className="dn" checked={!isFirstChecked} onClick={toggle} />
                                    <div className={`w3 br1 ${isFirstChecked ? 'bg-black-20' : 'bg-white'}`} style={{ height: '8px' }}  />
                                </label>
                            </div>
                        </div>
                    }
                    source={
<SampleCode
lang="html"
code={`
<!-- Container -->
<div style="
    background-color: rgba(0, 0, 0, .1);
    border-radius: 9999px;
    display: inline-flex;
    padding: 4px;
">
    <!-- Radio container -->
    <label style="
        border-radius: 9999px;
        cursor: pointer;
        padding: 4px 8px;

        /* For selected radio only */
        background-color: #357edd;
        color: #fff;
    ">
        <input type="radio" style="display: none" />

        <!-- Text -->
        ...
    </label>

    <!-- Other radio item -->
    ...
</div>
`}
/>
                    }
                />
            </div>
            <div className="bt b--black-20 relative">
                <h3 className="absolute bg-white f4 left-2 lh-copy ma0 ph2 top-0 ttu" style={{ transform: 'translate(0px, -50%)' }}>Use cases</h3>

                <div className="pa4">
                    <div className="inline-flex br-pill bg-black-10 pa1">
                        <label className="pointer pv1 ph2 br-pill flex bg-blue white">
                            <input type="radio" className="dn" />
                            Monthly
                        </label>
                        <label className="pointer pv1 ph2 br-pill flex">
                            <input type="radio" className="dn" />
                            Yearly
                        </label>
                    </div>
                </div>
            </div>
        </DetailsLayout>
    );
};

export default Details;