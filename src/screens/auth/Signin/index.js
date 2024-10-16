import React from 'react'
import {Text, View} from 'react-native'
import {styles} from './styles.js'
import AuthHeader from '../../../components/AuthHeader/index.js'
import Input from '../../../components/Input/index.js'
import Button from '../../../components/Button/index.js'
import LineSeparator from '../../../components/LineSeparator/index.js'
import GoogleLogin from '../../../components/GoogleLogin/index.js'

const Signin = () => {
    const onSignUp = () => {
        console.log('hello')
    }
    return (
        <View style={styles.container}>
            <AuthHeader title='Sign In' />
            <Input label='Email' placeholder='example@email.com'/>
            <Input isPassword label='Password' placeholder='******'/>

            <Button title='Sign In' style={styles.button} />
            <LineSeparator text='Or sign in with' />
            <GoogleLogin />
            <Text onPress={onSignUp} style={styles.footerText}>Don’t have an account?
                <Text style={styles.footerLink}> Sign Up</Text> 
                </Text>
        </View>
    )
}

export default React.memo(Signin);