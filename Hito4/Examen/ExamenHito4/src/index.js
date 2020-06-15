import React from 'react';
import Onboarding from './Views/Onboarding/WelcomeScreen';

const index = ({data,onPressSkip}) => {
    return (
        <>
            <Onboarding data={data}  onPressSkip={onPressSkip} />
        </>
    );
}

export default index;