
import { Dimensions } from 'react-native';

const config = {
    SCREEN_WIDTH:Dimensions.get('window').width,
    SCREEN_HEIGHT:Dimensions.get('window').height,
    HEADER_HEIGHT: Dimensions.get('window').height-45,
};
const strings = {
    PASS:"Password",
    USER:"User Name",
    TITLE_BUTTON: "Login",
    TITLE_BUTTON_ENVIAR: "Enviar",
    NOMBRE_IGLESIA: "Nombre de la Iglesia",
    CI:"CI",
    NOMBRE:"Nombre",
    APELLIDOP:"Apellido Paterno",
    APELLIDOM:"Apellido Materno",
   
    LUGAR: "Lugar",
    NUMREGCIV: "Numero de Registro Civil",
    PROFESION: "Profesión", 
    DIRECCION: "Dirección",
    IGLESIA: "Iglesia",
    GENERO: "Genero",
    CONTACTO: "Contacto",
    EMAIL: "Email",
    TELEFONO: "Telefono",
    CELULAR: "Celular",
    FECHA_NAC:"Fecha de Nacimiento",
    FECHA_CON:"Fecha de Conversion",
    FECHA_BAU:"Fecha de Bautizo",
    FECHA_TRANS: "Fecha de Transferencia",
    FEHCA_PRE:"Fecha de Presentacion",
    NOMP: "Nombre del Padre",
    NOMM: "Nombre de la Madre",
    CARGO: "Cargo",

    REGBAU: "Registo por Bautizo",
    REGSOL: "Registro por Solicitud",
    REGTRANSFERENCIA: "Registro por Transferencia",
    REGUS: "Registro de Usuarios",
    REGTRANS: "Registro de Membresias Transferidas",
    REG_NI: "Registro de Niños",
}
export default {
CONFIG: config,
STRING: strings,
}

