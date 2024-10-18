import { Dimensions, ProgressBarAndroidComponent, StyleSheet } from "react-native";
import { colours } from "../../utilities/colours";

const { width, height } = Dimensions.get('window')


export const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.45,
    },
    list: {

    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center'
    },
    paginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: colours.white,
        margin: 3
    }, 
    activeLine: {
        backgroundColor: colours.black,
        width: 30

    }
});