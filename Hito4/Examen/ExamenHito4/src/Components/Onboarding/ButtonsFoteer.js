import React from 'react';
import { StyleSheet, View } from 'react-native';

import Constants from '../../Config/Constants';

import Button from '../Onboarding/Button';

const ButtonInput = ({ onPressPrev, onPressNext, AccionPrev,
    AccionNext, colorFondoButton, colorTextButton, colorBordeButton }) => {
    return (
        <View style={styles.container}>
            <View style={styles.butonPrev}>
                <Button
                    onPress={onPressPrev}
                    Accion={AccionPrev}
                    colorFondoButton={colorFondoButton}
                    colorTextButton={colorTextButton}
                    colorBordeButton={colorBordeButton}
                ></Button>
            </View>
            <View style={styles.butonNext}>
                <Button
                    onPress={onPressNext}
                    Accion={AccionNext}
                    colorFondoButton={colorFondoButton}
                    colorTextButton={colorTextButton}
                    colorBordeButton={colorBordeButton}
                ></Button>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
    butonPrev: {
        alignItems: 'flex-start',
        position: 'absolute',
        marginLeft: 10,
        marginTop: 50,
    },
    butonNext: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 50,
    },
});
export default ButtonInput;