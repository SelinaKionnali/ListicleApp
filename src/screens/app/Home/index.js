import React from 'react'
import {FlatList, ScrollView, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './styles.js'
import Header from '../../../components/Header/index.js'
import { categories } from '../../../data/Categories.js'
import CategoryBox from '../../../components/CategoryBox/index.js'
import { products } from '../../../data/Products.js'
import ProductHomeItem from '../../../components/ProductHomeItem/index.js'


const Home = () => {

    const renderCategoryItem = ({ item, index }) => {
        return (
            <CategoryBox isFirst={index === 0} title={item?.title} image={item?.image} />
        )
    }

    const renderPropertyItem = ({ item }) => {
        return (
            <ProductHomeItem {...item}  />
        )
    }
    return (
        <SafeAreaView>
                <Header showSearch title='Find All You Need'  />
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={( index) => String(index) }/>
            
                <FlatList style={styles.productsList} numColumns={2} data={products} renderItem={renderPropertyItem} keyExtractor={(item) => item.id.toString()} />
        </SafeAreaView>
    )
}

export default Home;