import { StyleSheet } from "react-native";
import { colours } from "../../../utilities/colours";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    image: {
        width: '100%',
        height: 200,
    },
    titleContainer: {
        marginVertical: 54,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    innerTitle: {
        color: colours.orange,
        textDecorationLine: 'underline'
    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colours.blue,
        textAlign: 'center',
        marginTop: 30
    },
    btnCont: {
        flexDirection: 'row'
    }
})