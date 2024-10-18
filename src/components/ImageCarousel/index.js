import React from 'react'
import {FlatList, Image} from 'react-native'
import {styles} from './styles.js'

const ImageCarousel = ({ images }) => {
    const renderImages = ({ item }) => {
        return (
            <Image style={styles.image} source={{ uri: item }} />
        )
    }
    return (
        <FlatList horizontal pagingEnabled style={styles.list} data={images} renderItem={renderImages} />
    )
}

export default React.memo(ImageCarousel);