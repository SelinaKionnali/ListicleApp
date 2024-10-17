import { Dimensions, StyleSheet } from "react-native";
import { colours } from "../../../utilities/colours";

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    container: {
        padding: 24
    },
    image: {
        width: width,
        height: height * 0.45
    },
    content: {
        backgroundColor: colours.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        padding: 24
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '400'

    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 8
    },
    description: {
        fontSize: 14,
        fontWeight: '300',
        marginVertical: 8,
        color: colours.textGrey
    }
})