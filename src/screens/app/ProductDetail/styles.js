import { Dimensions, StyleSheet } from "react-native";
import { colours } from "../../../utilities/colours";

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
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
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        width: width - 24
    },
    btnContainer: {
        backgroundColor: colours.borderColour,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    backArrowContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: colours.white,
        position: 'absolute',
        margin: 24
    },
    backArrow: {
        width: 20,
        height: 20,
    }
})