import { StyleSheet } from "react-native";
import { colours } from "../../../utilities/colours";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeText: {
        color: colours.blue,
        marginHorizontal: 13
    },
    agreeTextBold: {
        fontWeight: 'bold'
    },
    button: {
        marginVertical: 20
    },
    footerText: {
        color: colours.blue,
        marginBottom: 56,
        marginTop: 50,
        alignSelf: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
});