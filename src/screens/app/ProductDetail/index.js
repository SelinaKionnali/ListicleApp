import React from 'react'
import {Image, Linking, Pressable, ScrollView, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles.js'
import Button from '../../../components/Button/index.js'
import markerBtn from '../../../assets/markerFocussed.png'
import backArrow from '../../../assets/BackArrow.png'
import ImageCarousel from '../../../components/ImageCarousel/index.js'


const ProductDetail = ({ navigation, route }) => {
    const { product } = route?.params || {}
    console.log(product)

    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        //make a phone call
        const phone = '+447877791861';
        Linking.openURL(`tel: ${phone}`)

        //send an email
        const email = 'selina@kionnali.com'
        Linking.openURL(`mailto: ${email}`)
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel style={styles.image} images={product?.images}/>

                ) : (
                    <Image style={styles.image} source={{uri: product.image}}/>

                )}

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

                <Button onPress={onContact}  title='Contact Seller' />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetail);