import React from 'react'
import {Image, ScrollView, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles.js'


const ProductDetail = ({ navigation, route }) => {
    const { product } = route?.params || {}

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView>
                <Image style={styles.image} source={{uri: product.image}}/>
                <View style={styles.content}>
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.price}>{product?.price}</Text>
                <Text style={styles.description}>{product?.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetail);