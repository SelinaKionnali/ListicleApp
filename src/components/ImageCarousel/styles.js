import { Dimensions, StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

const { width, height } = Dimensions.get('window')


export const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.45,
    },
    list: {

    }
});