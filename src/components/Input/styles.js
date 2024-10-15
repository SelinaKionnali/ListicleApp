import { StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginBottom: 8,
        color: colours.blue,
        fontSize: 14,
        fontWeight: '500'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colours.grey,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: 'center',
    },
    input: {
        // borderWidth: 1,
        // borderColor: 'yellow'
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
});