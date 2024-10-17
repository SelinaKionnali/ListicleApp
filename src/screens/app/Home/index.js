import React, { useEffect, useState } from 'react'
import {FlatList, ScrollView, View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './styles.js'
import Header from '../../../components/Header/index.js'
import { categories } from '../../../data/Categories.js'
import CategoryBox from '../../../components/CategoryBox/index.js'
import { products } from '../../../data/Products.js'
import ProductHomeItem from '../../../components/ProductHomeItem/index.js'


const Home = ({navigation}) => {

    const [selectedCategory, setSelectedCategory] = useState()
    const [filteredProduct, setFilteredProduct] = useState(products)
    const [keyword, setKeyword] = useState()


    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory)
            setFilteredProduct(updatedProducts)
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
            setFilteredProduct(updatedProducts)
        } else if (!selectedCategory && keyword) {
            const updatedProducts = products.filter((product) =>  product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
            setFilteredProduct(updatedProducts)
        } else if (!selectedCategory && !keyword) {
            setFilteredProduct(products)
        }
    }, [selectedCategory, keyword])

    const renderCategoryItem = ({ item, index }) => {
        return (
            <CategoryBox 
            onPress={() => setSelectedCategory(item?.id)}
            isSelected={item?.id === selectedCategory}
            isFirst={index === 0} 
            title={item?.title} 
            image={item?.image} 
            />
        )
    }
    const renderProductItem = ({ item }) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductDetail')
        }
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item}  />
        )
    }
    return (
        <SafeAreaView>
                <Header showSearch title='Find All You Need' keyword={keyword} onSearch={setKeyword} />
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => item.id ? item.id.toString() : String(index)}/>
            
                <FlatList ListFooterComponent={<View style={{marginBottom: 200}} />} style={styles.productsList} numColumns={2} data={filteredProduct} renderItem={renderProductItem} keyExtractor={(item) => item.id.toString()} />
        </SafeAreaView>
    )
}

export default React.memo(Home);