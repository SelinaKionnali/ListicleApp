import React from 'react'
import {ScrollView, Text, View} from 'react-native'
import {styles} from './styles.js'
import AuthHeader from '../../../components/AuthHeader/index.js'
import Input from '../../../components/Input/index.js'
import Button from '../../../components/Button/index.js'
import LineSeparator from '../../../components/LineSeparator/index.js'
import GoogleLogin from '../../../components/GoogleLogin/index.js'
import { SafeAreaView } from 'react-native-safe-area-context'


const Signin = ({navigation}) => {
    const onSignUp = () => {
        navigation.navigate('Signup')
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <AuthHeader onBackPress={onBack} title='Sign In' />
            <Input label='Email' placeholder='example@email.com'/>
            <Input isPassword label='Password' placeholder='******'/>

            <Button title='Sign In' style={styles.button} />
            <LineSeparator text='Or sign in with' />
            <GoogleLogin />
            <Text onPress={onSignUp} style={styles.footerText}>Don’t have an account?
                <Text style={styles.footerLink}> Sign Up</Text> 
                </Text>
        </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Signin);