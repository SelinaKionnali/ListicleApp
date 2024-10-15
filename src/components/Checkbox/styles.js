import { StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

export const styles = StyleSheet.create({
    container: {
        borderColor: colours.grey,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22
    },
    innerContainer: {
        backgroundColor: colours.grey,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkIcon: {
        width: 12,
        height: 9
    }
});