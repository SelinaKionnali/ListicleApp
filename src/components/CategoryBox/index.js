import React from 'react'
import {View, Image, Text, Pressable} from 'react-native'
import {styles} from './styles.js'

const CategoryBox = ({title, image, onPress, isFirst}) => {


    return (
        <Pressable style={[styles.container, isFirst ? {marginLeft: 24} : {}]} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: image}} />
            </View>
            <Text style={styles.title}>{ title }</Text>
       </Pressable>
    )
}

export default CategoryBox;