import React from 'react'
import {View, Image, Text, Pressable} from 'react-native'
import {styles} from './styles.js'
import { colours } from '../../utilities/colours.js'

const CategoryBox = ({title, image, onPress, isFirst, isSelected}) => {


    return (
        <Pressable style={[styles.container, isFirst ? {marginLeft: 24} : {}]} onPress={onPress}>
            <View style={[styles.imageContainer, isSelected ? {backgroundColor: colours.black} : {} ]}>
                <Image style={styles.image} source={{uri: image}} />
            </View>
            <Text style={[styles.title, isSelected ? {color: colours.blue, fontWeight: '500'} : {} ]}>{ title }</Text>
       </Pressable>
    )
}

export default CategoryBox;