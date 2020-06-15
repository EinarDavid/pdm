
import React from 'react';
import Onboarding from 'einaronboarding/src';

import Img from './src/Config/Images';
import Constants from './src/Config/Constants';
import Colors from './src/Config/Colors';

const _onPressSkip = () => {
  console.log("");

}

const data = [
  {
    source: Img.FONDO1,
    Titulo: Constants.STRINGS.TITULO1,
    Contenido: Constants.STRINGS.CONTENIDO1,
    color: Colors.Orange,
    colorFondo: Colors.white,
    AccionPrev: Constants.STRINGS.NETX,
    AccionNext: Constants.STRINGS.PREV,

    colorFondoButton:Colors.Orange,
    colorTextButton:Colors.white,
    colorBordeButton:Colors.black,
  },
  {
    source: Img.FONDO2,
    Titulo: Constants.STRINGS.TITULO2,
    Contenido: Constants.STRINGS.CONTENIDO2,
    color: Colors.Orange,
    colorFondo: Colors.white,
    AccionPrev: Constants.STRINGS.NETX,
    AccionNext: Constants.STRINGS.PREV,
    colorFondoButton:Colors.Orange,
    colorTextButton:Colors.white,
    colorBordeButton:Colors.black,
  },
  {
    source: Img.FONDO3,
    Titulo: Constants.STRINGS.TITULO3,
    Contenido: Constants.STRINGS.CONTENIDO3,
    color: Colors.Orange,
    colorFondo: Colors.white,
    AccionPrev: Constants.STRINGS.NETX,
    AccionNext: Constants.STRINGS.PREV,
    colorFondoButton:Colors.Orange,
    colorTextButton:Colors.white,
    colorBordeButton:Colors.black,
  },
];

const App = () => {
  return (
      <Onboarding data={data} onPressSkip={_onPressSkip} />
  );
};

export default App;
