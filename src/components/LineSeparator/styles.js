import { StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: colours.lightGrey

    },
    text: {
        color: colours.blue,
        fontWeight: '500',
        marginHorizontal: 8

    }
})