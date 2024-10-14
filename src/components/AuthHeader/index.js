import React from 'react'
import {View, Pressable, Image, Text} from 'react-native'
import {styles} from './styles.js'
import arrow from '../../assets/icon.png'

const AuthHeader = ({title, onBackPress}) => {

    return (
       <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={arrow} />
            </Pressable>
                <Text style={styles.title}>{title}</Text>
       </View>
    )
}

export default AuthHeader;