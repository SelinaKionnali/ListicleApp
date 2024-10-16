import React from 'react'
import {TouchableOpacity, View, Image} from 'react-native'
import {styles} from './styles.js'
import checkIcon from '../../assets/check.png'

const Checkbox = ({checked, onCheck}) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={styles.container}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={checkIcon} />
                </View>
            ) : null}
        </TouchableOpacity>
    )
}

export default React.memo(Checkbox);