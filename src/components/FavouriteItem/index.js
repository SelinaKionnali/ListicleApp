import React from 'react'
import {View, Image, Text, Pressable} from 'react-native'
import {styles} from './styles.js'
import closeIcon from '../../assets/Shape.png'


const FavouriteItem = ({title, price, image, onPress}) => {


    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{uri: image}} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{ title }</Text>
                <Text style={styles.price}>{ price }</Text>
            </View>
            <Image source={closeIcon} style={styles.icon} />
       </Pressable>
    )
}

export default FavouriteItem;