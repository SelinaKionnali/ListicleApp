import { StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: colours.darkGrey,
        borderRadius: 8,
        paddingVertical: 8,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto'
    },
    image: {
        height: 30,
        width: 30
    }
});