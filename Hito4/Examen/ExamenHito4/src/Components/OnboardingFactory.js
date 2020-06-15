import React from 'react';
import { StyleSheet, View } from 'react-native';

import Description from './Onboarding/Description';
import ButtonsFooter from './Onboarding/ButtonsFoteer';

const OnboardingFactory = ({ source, Titulo, Contenido, color, onPressPrev, onPressNext, AccionPrev,
    AccionNext, colorFondo, colorFondoButton, colorTextButton, colorBordeButton }) => {
    return (
        <View style={[styles.container, { backgroundColor: colorFondo }]}>
            <Description
                source={source}
                Titulo={Titulo}
                Contenido={Contenido}
                color={color}
            ></Description>
            <ButtonsFooter
                onPressPrev={onPressPrev}
                onPressNext={onPressNext}
                AccionPrev={AccionPrev}
                AccionNext={AccionNext}
                
                colorFondoButton={colorFondoButton}
                colorTextButton={colorTextButton}
                colorBordeButton={colorBordeButton}
            ></ButtonsFooter>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
});
export default OnboardingFactory;

