import React from 'react'
import { PulseLoader } from 'react-spinners';

const Spinner = () => (
    <div className="spinner">
        <PulseLoader color={'#1eaedb'} size={25} margin={'3px'}/>
    </div>
)

export default Spinner;