import React from 'react'
import {ScrollView, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './styles.js'


const Profile = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Product Details</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Profile);