import React from 'react'
import {View, Image, Text, Pressable} from 'react-native'
import {styles} from './styles.js'

const ProductHomeItem = ({title, price, image, onPress}) => {


    return (
        <Pressable style={styles.container} onPress={onPress}>
                <Image style={styles.image} source={{uri: image}} />
            <Text style={styles.title}>{ title }</Text>
            <Text style={styles.price}>{ price }</Text>
       </Pressable>
    )
}

export default ProductHomeItem;