import { StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: colours.grey
    },
    image: {
        width: 32,
        height: 32
    },
    imageContainer: {
        backgroundColor: colours.lightGrey,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8
    }
});