import React from 'react'
import {Image, Pressable, ScrollView, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles.js'
import Button from '../../../components/Button/index.js'
import markerBtn from '../../../assets/markerFocussed.png'
import backArrow from '../../../assets/BackArrow.png'


const ProductDetail = ({ navigation, route }) => {
    const { product } = route?.params || {}

    const onBackPress = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{uri: product.image}}/>

                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>

                <Pressable onPress={onBackPress} style={styles.backArrowContainer} >
                    <Image style={styles.backArrow} source={backArrow} />
                </Pressable>


            </ScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.btnContainer} >
                    <Image style={styles.markerImg} source={markerBtn} />
                </Pressable>

                <Button  title='Contact Seller' />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetail);