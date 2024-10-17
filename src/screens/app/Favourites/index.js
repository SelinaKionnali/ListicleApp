import React from 'react'
import {FlatList, ScrollView, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './styles.js'
import { products } from '../../../data/Products.js'
import FavouriteItem from '../../../components/FavouriteItem/index.js'
import Header from '../../../components/Header/index.js'

const Favourites = ({ navigation }) => {
    const renderItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetail', { product: item })
        }
        return (
            <FavouriteItem onPress={onProductPress} {...item}/>
        )
    }
    return (
        <SafeAreaView>
                <Header title='Favourites'/>
                <FlatList data={products} renderItem={renderItem} keyExtractor={(item, index) => item?.id ? item.id.toString() : String(index)}/>
        </SafeAreaView>
    )
}

export default React.memo(Favourites);