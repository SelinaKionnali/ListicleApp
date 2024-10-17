import React from 'react'
import {ScrollView, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './styles.js'

const Favourites = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Favourites</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Favourites;