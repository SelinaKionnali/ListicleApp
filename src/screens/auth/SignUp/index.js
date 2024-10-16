import React, {useState} from 'react'
import {Text, View} from 'react-native'
import { styles } from './styles.js'
import AuthHeader from '../../../components/AuthHeader/index.js'
import Input from '../../../components/Input/index.js'
import Checkbox from '../../../components/Checkbox/index.js'
import Button from '../../../components/Button/index.js'
import LineSeparator from '../../../components/LineSeparator/index.js'
import GoogleLogin from '../../../components/GoogleLogin/index.js'

const Signup = () => {
    const [checked, setChecked] = useState(false)
    const onSignin = () => {
        console.log('hello')
    }
    return (
        <View style={styles.container}>
            <AuthHeader title='Sign Up' />
            <Input label='Name' placeholder='John Doe'/>
            <Input label='Email' placeholder='example@email.com'/>
            <Input isPassword label='Password' placeholder='******'/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms </Text>& <Text style={styles.agreeTextBold}>Privacy </Text></Text>
            </View>

            <Button title='Sign Up' style={styles.button} />
            <LineSeparator text='Or sign up with' />
            <GoogleLogin />
            <Text onPress={onSignin} style={styles.footerText}>Already have an account?
                <Text style={styles.footerLink}> Sign In</Text> 
                </Text>
        </View>
    )
}

export default React.memo(Signup);