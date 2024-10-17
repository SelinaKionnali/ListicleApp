import React from 'react'
import {ScrollView, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './styles.js'


const Profile = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;