/* eslint-disable */
import React, { useState } from 'react';
import DisclaimerPage from '../../../components/DisclaimerPage';

function Disclaimer() {
    const [openDisclaimer, setOpenDisclaimer] = useState(true);

    const handleClose = () => {
        setOpenDisclaimer(false);
    };

    return (
        <div className="App">
            <DisclaimerPage open={openDisclaimer} handleClose={handleClose} />
            {/* Other components */}
        </div>
    );
}

export default Disclaimer;


