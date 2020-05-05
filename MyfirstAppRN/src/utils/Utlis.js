import { Value, floor } from "react-native-reanimated";

export default class utils {
    static isValidField = (value) => {
        return value.trim().length > 0;
    }

    static isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }
}