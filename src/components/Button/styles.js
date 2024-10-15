import { StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

export const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: colours.blue,
        borderRadius: 8,
        paddingVertical: 8,
        width: '100%',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colours.white

    }
});