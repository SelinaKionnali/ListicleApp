import React from 'react'
import {Text, View} from 'react-native'
import { styles } from './styles.js'
import AuthHeader from '../../../components/AuthHeader/index.js'
import Input from '../../../components/Input/index.js'

const Signup = () => {
    return (
        <View>
            <AuthHeader title='Sign Up' />
            <Input label='Name' placeholder='John Doe'/>
            <Input label='Email' placeholder='example@email.com'/>
            <Input isPassword label='Password' placeholder='******'/>
        </View>
    )
}

export default Signup;