import { StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

export const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 24

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: colours.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        width: 24,
        height: 24
    },
    space: {
        width: 24
    }
});