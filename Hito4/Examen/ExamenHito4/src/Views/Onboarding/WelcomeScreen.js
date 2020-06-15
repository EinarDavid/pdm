import React, { useState, useEffect } from 'react';

import { StyleSheet, View } from 'react-native';

import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import Colors from '../../Config/Colors';

import Onboarding from '../../Components/OnboardingFactory';

const FormRegScreen = ({ data, onPressSkip }) => {
    const [onboardingActual, setOnboardingActual] = useState(0);
    const [informacion, setInformacion] = useState(null);

    useEffect(() => {
        const array = [];
        let aux = 0;
        data.forEach(e => {
            // console.log(e)
            const core = e;
            core.id = aux;
            aux = aux + 1;
            array.push(core);
        });
        setInformacion(array);

    }, []);

    return (

        <>
            {informacion ? (
                <>
                    {informacion.map(e => (
                        <>

                            {e.id == onboardingActual ? (
                                <View style={styles.container}>
                                    <Onboarding
                                        source={e.source}
                                        Titulo={e.Titulo}
                                        Contenido={e.Contenido}
                                        color={e.color}
                                        colorFondo={e.colorFondo}
                                        AccionPrev={e.AccionPrev}
                                        AccionNext={e.AccionNext}

                                        colorFondoButton={e.colorFondoButton}
                                        colorTextButton={e.colorTextButton}
                                        colorBordeButton={e.colorBordeButton}

                                        onPressPrev={(() => {
                                            if (e.id == 0) {
                                                onPressSkip();

                                            }
                                            else if (e.id > 0) {
                                                setOnboardingActual(e.id - 1);
                                            }


                                        })}

                                        onPressNext={(() => {
                                            if (e.id < informacion.length - 1) {
                                                setOnboardingActual(e.id + 1);
                                            }
                                            else {
                                                onPressSkip()
                                            }
                                        })}


                                    />
                                </View>

                            ) : null}
                        </>
                    ))}
                </>
            ) : null}
        </>

    );
};
const styles = StyleSheet.create({
    container: {
       
        flex: 1,
    },
});
export default FormRegScreen;

