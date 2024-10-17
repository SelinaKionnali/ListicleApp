import { StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";



export const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        marginHorizontal: 24,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colours.borderColour
    },
    contentContainer: {
        flex: 1

    },
    title: {
        color: colours.textGrey,
        paddingVertical: 8
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20
    },
    price: {
        color: colours.black,
        paddingBottom: 8
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 8
    }
});