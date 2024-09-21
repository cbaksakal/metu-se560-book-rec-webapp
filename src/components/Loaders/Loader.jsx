import React from 'react';
import LoadingComp from './LoadingComp';

const Loader = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                // backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent white
                zIndex: 9999, // Ensure it's on top of other elements
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <LoadingComp type="spokes" color="#F6995C"/>
        </div>
    );
};

export default Loader;
