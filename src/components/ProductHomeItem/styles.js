import { Dimensions, StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

const { width } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    title: {
        color: colours.textGrey,
        paddingVertical: 8
    },
    image: {
        width: 32,
        height: 32,
        borderRadius: 8,
        width: (width - 64) / 2,
        height: 220
    },
    price: {
        color: colours.black,
        paddingBottom: 8

    }
});