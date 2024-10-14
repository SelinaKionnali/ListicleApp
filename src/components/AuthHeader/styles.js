import { StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

export const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54
    },
    image: {
        width: 18,
        height: 18,
        
    },
    title: {
        color: colours.blue,
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 16
    }
});