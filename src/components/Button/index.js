import React from 'react'
import {Pressable, Text, View} from 'react-native'
import {styles} from '../Button/styles.js'

const Button = ({title}) => {
    return (
        <Pressable style={styles.container}>
            <Text>{title}</Text>
        </Pressable>
    )
}

export default Button;